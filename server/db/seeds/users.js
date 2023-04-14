exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      user_name: 'Sultanfariz',
      first_name: 'Sultan',
      last_name: 'Fariz',
      email: 'sultanfariz2023@gmail.com',
      age: '28',
      country_origin: 'Malaysia',
      city: 'Kuala Lumpur',
      user_status: 'international',
      prim_language: 'Malay',
      english_level: 'some English',
      sharing_one: 'I would love to learn Maori culture',
      sharing_two: 'I really like to take picture',
      sharing_three: 'I would like to share my traditional Malaysia cuisine',
      description:
        "Hi I’m Sultan, I'm thrilled to explore Wellington and capture the beauty of its culture through my lens. I'm excited to learn about Maori traditions, indulge in Malaysian cuisine, and meet the welcoming locals. Wellington, here I come with open arms and an adventurous spirit!",
      profile_img: 'placeholderimage.jpg',
      auth_id: 'auth|1'
    },
    {
      id: 2,
      user_name: 'wayanwahyu',
      first_name: 'Wayan',
      last_name: 'Wahyu',
      email: 'wayan_wahyu@gmail.com',
      age: '25',
      country_origin: 'Malaysia',
      city: 'Jakarta',
      user_status: 'international',
      prim_language: 'Bahasa Indonesia',
      english_level: 'no english',
      sharing_one:
        'I would love to share my batik technique, a technique of wax-resist dyeing applied to whole cloth, or cloth made using this technique',
      sharing_two: 'I want to meet local and make new friend',
      sharing_three: 'I really love do Hiking',
      description:
        "Hello! My name is Wayan and I come from Indonesia. I am so happy to share my passion for batik, a traditional dyeing technique, with the amazing people of Wellington. My English may not be very good, but I am eager to learn and practice with the locals to improve my language skills. I also love hiking and can't wait to explore the stunning landscapes of Wellington. I am really excited to start this new adventure and create unforgettable memories in Wellington!",
      profile_img: 'placeholderimage.jpg',
      auth_id: 'auth|2'
    },
    {
      id: 3,
      user_name: 'Emmamaslow',
      first_name: 'Emma',
      last_name: 'Maslow',
      email: 'emma_maslow@gmail.com',
      age: '35',
      country_origin: 'New Zealand',
      city: 'Wellington',
      user_status: 'local',
      prim_language: 'English',
      english_level: 'Fluent',
      sharing_one: 'I really love foods from different countries',
      sharing_two: 'Love cooking',
      sharing_three: 'Love to make new friends with anyone.',
      description:
        "Hi, I'm Emma from New Zealand! Cooking is my passion and I love meeting new friends from around the world. I can't wait to share my love for food and culture with international visitors and create unforgettable memories together! Let's connect and explore the world through food!",
      profile_img: 'placeholderimage.jpg',
      auth_id: 'auth|3'
    },
    {
      id: 4,
      user_name: 'Jannethbrown',
      first_name: 'Janet',
      last_name: 'Brown',
      email: 'janneth_brown@gmail.com',
      age: '29',
      country_origin: 'New Zealand',
      city: 'Wellington',
      user_status: 'local',
      prim_language: 'English',
      english_level: 'Fluent',
      sharing_one: 'Love to share about international fashion',
      sharing_two: 'Creative fashion',
      sharing_three: 'Small Trips',
      description:
        "I'm Janneth, a fashion designer from New Zealand. I'm absolutely in love with international fashion and enjoy sharing my passion with others who have similar interests. Exploring new places and cultures through small trips is something I truly enjoy. I'm thrilled about the opportunity to meet international people and connect with them to exchange ideas and experiences about fashion and beyond. Let's create amazing memories together and dive into the world of fashion!",
      profile_img: 'placeholderimage.jpg',
      auth_id: 'auth|4'
    },
  ])
}
