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
  auth: true,
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
