import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  auth: {
    cookies: {
      sameSite: 'Lax',
      
    },
    tokenExpiration: 7200,
    depth: 0,
    verify: {
      generateEmailHTML: ({token}) => {
        return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Verify account</a>`
      }
    },
  },
  fields: [
    {
      name: 'role',
      required: true,
      defaultValue: 'user',
      type: 'select',

      options: [
        {
          label: "Admin", 
          value: "admin"
        },
        {
          label: "User",
          value: 'user'
        }
      ]
    }
  ],
}
