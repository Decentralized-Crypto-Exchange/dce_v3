import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId:'vs7t23o4',
    dataset: 'production',
    apiVersion: 'v1',
    token:
    'skC12woQdCvncDdHa1kmXcX877nzeq2OIcjoFBzMwtHFudsLAzNpxu36NnwHiyPIQhFeFSvCjJ5Km7m9FZDazFpVo9JAC5VH1ojlzvaZGI42XOswNSjcxxO2ti8EXaWwLHvL89asoobbiqN3e6VN45nUqz4759OCg6ZGO13ltFlPD84ZOZq8',
    useCdn: false,
})