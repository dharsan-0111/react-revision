import CommentBox from "./CommentBox";

export interface Comment {
  username: string;
  comment: string;
  replies: Comment[]; 
}

const data: Comment[] = [
  {
    username: 'dharsan_05',
    comment: "Does anyone have recommendations for learning React?",
    replies: [
      {
        username: 'sachin11',
        comment: "Check out the official docs, they are top-tier.",
        replies: [
          {
            username: 'coder_bee',
            comment: "Agreed! Also, try the new docs for hooks patterns.",
            replies: [
              {
                username: 'sachin11',
                comment: "Are the legacy docs still relevant for class components?",
                replies: [
                  {
                    username: 'react_pro',
                    comment: "Only if you're maintaining older codebases. Don't start new projects with them.",
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    username: 'system_admin',
    comment: "Planned maintenance scheduled for Sunday, 2:00 AM UTC.",
    replies: [
      { username: 'user_a', comment: "Will the API be down?", replies: [] },
      { username: 'user_b', comment: "How long is the window?", replies: [] },
      { username: 'user_c', comment: "Can we postpone this?", replies: [] },
      { username: 'user_d', comment: "Thanks for the heads up!", replies: [] },
      { 
        username: 'user_e', 
        comment: "Finally! Hope this fixes the login lag.",
        replies: [
            { username: 'system_admin', comment: "Yes, that is the primary goal.", replies: [] }
        ]
      }
    ]
  },
  {
    username: 'travel_junkie',
    comment: "Just got back from Kyoto. Highly recommend the philosopher's path!",
    replies: [
      {
        username: 'globetrotter',
        comment: "Did you go during cherry blossom season?",
        replies: [
          {
            username: 'travel_junkie',
            comment: "Yes! The crowds were wild though.",
            replies: [
              {
                username: 'photog_jim',
                comment: "Best time for lighting is usually around 5 AM.",
                replies: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    username: 'mystery_user',
    comment: "This is a lone comment with no interaction.",
    replies: []
  },
  {
    username: 'ai_bot',
    comment: "Beep boop. I am here to answer your questions.",
    replies: [
      {
        username: 'human_01',
        comment: "What is the meaning of life?",
        replies: [
          {
            username: 'ai_bot',
            comment: "42. Or perhaps just 01010100.",
            replies: [
              {
                username: 'human_01',
                comment: "Classic.",
                replies: []
              }
            ]
          }
        ]
      }
    ]
  }
];

const NestedComments = () => {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  )
}

export default NestedComments