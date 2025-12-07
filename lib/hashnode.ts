const HASHNODE_API = "https://gql.hashnode.com";

// Force no caching by adding timestamp to requests
function addCacheBuster(query: string) {
  return query + `\n# Cache buster: ${Date.now()}`;
}

const GET_POSTS = `
  query GetPosts($host: String!) {
    publication(host: $host) {
      posts(first: 10) {
        edges {
          node {
            id
            title
            subtitle
            brief
            slug
            publishedAt
            coverImage {
              url
            }
            content {
              html
            }
            tags {
              name
              slug
            }
            readTimeInMinutes
            author {
              name
              profilePicture
            }
          }
        }
      }
    }
  }
`;

const GET_POST = `
  query GetPost($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        id
        title
        subtitle
        brief
        slug
        publishedAt
        coverImage {
          url
        }
        content {
          html
        }
        tags {
          name
          slug
        }
        readTimeInMinutes
        author {
          name
          profilePicture
        }
      }
    }
  }
`;

export async function getHashnodePosts() {
  const host = process.env.HASHNODE_PUBLICATION_HOST;
  
  console.log("Fetching posts from Hashnode host:", host);
  
  if (!host) {
    console.log("No HASHNODE_PUBLICATION_HOST found in environment");
    return [];
  }

  try {
    const response = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'X-Cache-Bust': Date.now().toString()
      },
      body: JSON.stringify({
        query: addCacheBuster(GET_POSTS),
        variables: { host }
      }),
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    const { data } = await response.json();
    console.log("Hashnode API response:", JSON.stringify(data, null, 2));
    
    if (!data?.publication?.posts?.edges) {
      console.log("No posts found in response");
      return [];
    }
    
    const posts = data.publication.posts.edges.map((edge: any) => ({
      slug: edge.node.slug,
      title: edge.node.title,
      subtitle: edge.node.subtitle || "",
      publishedAt: edge.node.publishedAt,
      brief: edge.node.brief || "",
      coverImage: edge.node.coverImage?.url,
      content: edge.node.content?.html || "",
      tags: edge.node.tags || [],
      readTimeInMinutes: edge.node.readTimeInMinutes || 0,
      author: edge.node.author,
    }));
    
    console.log(`Found ${posts.length} posts from Hashnode`);
    return posts;
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error);
    return [];
  }
}

export async function getHashnodePost(slug: string) {
  const host = process.env.HASHNODE_PUBLICATION_HOST;
  
  if (!host) {
    return null;
  }

  try {
    const response = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'X-Cache-Bust': Date.now().toString()
      },
      body: JSON.stringify({
        query: addCacheBuster(GET_POST),
        variables: { host, slug }
      }),
      cache: 'no-store',
      next: { revalidate: 0 }
    });

    const { data } = await response.json();
    
    if (!data?.publication?.post) {
      return null;
    }
    
    const post = data.publication.post;
    return {
      slug: post.slug,
      title: post.title,
      subtitle: post.subtitle || "",
      publishedAt: post.publishedAt,
      brief: post.brief || "",
      coverImage: post.coverImage?.url,
      content: post.content?.html || "",
      tags: post.tags || [],
      readTimeInMinutes: post.readTimeInMinutes || 0,
      author: post.author,
    };
  } catch (error) {
    console.error("Error fetching Hashnode post:", error);
    return null;
  }
}
