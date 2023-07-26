const tweets = [
  {
    id: 'jl001',
    user: {
      id: 'ul000001',
      username: 'jamielife',
      name: 'Jamie Taylor',
      image:
        'https://2.gravatar.com/avatar/e529653809f90533471211fca7717069',
    },
    createdAt: '2023-06-27T12:00:00.000Z',
    content: 'YoutubeのSubscribeボタンが機能するかどうか確認してもらえますか？',
    image:
      'https://jamietaylor.me/static/media/jamietaylor-ramen.webp',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
    impressions: 0,
    isVIP: true,
  },
  {
    id: 't0',
    user: {
      id: 'u1',
      username: 'aHugsAlots44',
      name: 'Amanda',
      image:
        'https://loremflickr.com/cache/resized/65535_51147151025_0054d310c3_c_640_480_nofilter.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content: 'Lorem ipsum sick color scheme bro!',
    image:
      'https://images.unsplash.com/photo-1492012327145-ae49592e5f6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
    impressions: 0,
    isVIP: true,
    isFriend: true,
  },
  {
    id: '111111111',
    createdAt: '2023-04-28T08:30:00.000Z',
    user: {
      id: '123456789',
      name: 'Geoffrey',
      username: 'jfitzgerald1889',
      image:
        'https://loremflickr.com/cache/resized/65535_52304379264_8d01ec90cf_b_640_480_nofilter.jpg',
    },
    content:
      'Just had a great workout at the gym! 💪 #fitness #healthylifestyle',
    numberOfComments: 2,
    numberOfRetweets: 5,
    numberOfLikes: 25,
    impressions: 500,

  },
  {
    id: '222222222',
    createdAt: '2023-04-27T19:45:00.000Z',
    user: {
      id: '987654321',
      name: 'Jim Beam',
      username: 'jbeammy',
      image:
        'https://loremflickr.com/cache/resized/65535_52490818565_b618572970_z_640_480_nofilter.jpg',
    },
    content: 'Had an amazing surf session this morning',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/8.jpg',
    numberOfComments: 10,
    numberOfRetweets: 20,
    numberOfLikes: 100,
    impressions: 1000,
    isVIP: true,
  },
  {
    id: '333333333',
    createdAt: '2023-04-26T12:00:00.000Z',
    user: {
      id: '123456789',
      name: 'Jane Smith',
      username: 'janesmith',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png',
    },
    content:
      'Excited to announce that I will be speaking at the upcoming tech conference in San Francisco! 🎉 #womenintech',
    numberOfComments: 5,
    numberOfRetweets: 10,
    numberOfLikes: 50,
    impressions: 1000,
    isVIP: true,
    isFriend: true,
  },
  {
    id: 't1',
    user: {
      id: 'u1',
      username: 'gomeMan2022',
      name: 'Bradley',
      image:
        'https://loremflickr.com/cache/resized/14_19241377_1ea854fa41_z_640_480_nofilter.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
  },
  {
    id: 't2',
    user: {
      id: 'u1',
      username: 'gomeMan2022',
      name: 'Bradley',
      image:
        'https://loremflickr.com/cache/resized/14_19241377_1ea854fa41_z_640_480_nofilter.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: 't4',
    user: {
      id: 'u1',
      username: 'gomeMan2022',
      name: 'Bradley',
      image:
        'https://loremflickr.com/cache/resized/14_19241377_1ea854fa41_z_640_480_nofilter.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Turpis massa tincidunt dui ut ornare lectus sit amet est. Velit laoreet id donec ultrices tincidunt arcu non.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
  {
    id: '4t5',
    user: {
      id: 'u1',
      username: 'OverlyProfessional',
      name: 'T. Fischer',
      image:
        'https://loremflickr.com/cache/resized/65535_52881085363_b0fd697e32_c_640_480_nofilter.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
    isVIP: true,    
  },
  {
    id: '4t6',
    user: {
      id: 'u1',
      username: 'maddisonWanderer',
      name: 'Maddy T.',
      image:
        'https://loremflickr.com/cache/resized/65535_52525758382_b705c16669_c_640_480_nofilter.jpg',
    },
    createdAt: '2020-08-27T12:00:00.000Z',
    content:
      "Vacation, all I ever wanted.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
  },
    
];

export default tweets;
