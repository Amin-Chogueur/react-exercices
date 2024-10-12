export const sideData = [
  {
    lable: "home",
    to: "/",
  },
  {
    lable: "profile",
    to: "/profile",
    children: [
      {
        lable: "details",
        to: "/details",
        children: [
          {
            lable: "location",
            to: "/location",
            children: [
              {
                lable: "city",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    lable: "setting",
    to: "/setting",
    children: [
      {
        lable: "account",
        to: "/account",
        children: [
          {
            lable: "admin",
            to: "/login",
          },
        ],
      },
      {
        lable: "security",
        to: "/security",
        children: [
          {
            lable: "login",
            to: "/login",
          },
          {
            lable: "register",
            to: "/register",
            children: [
              {
                lable: "random data",
              },
            ],
          },
        ],
      },
    ],
  },
];
