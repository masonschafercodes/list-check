import React from 'react';

import './List.css';

import PeopleList from '../components/PeopleList/PeopleList';
import Navbar from '../components/Navbar/Navbar';

const List1 = () => {
    return (
        <>
        <Navbar />
        <h2 id="intro-text">
          Check up on Amazon Lists of{" "}
          <span className="highlight-color">Friends</span> and{" "}
          <span className="highlight-color">Family</span>
        </h2>
        <PeopleList
        people={[
          {
            name: "Mason Schafer",
            list_link:
              "https://www.amazon.com/hz/wishlist/ls/3F788HQ1UZQK4?ref_=wl_share",
            picture_link:
              "https://avatars2.githubusercontent.com/u/57614646?s=400&u=3366b48fc8118fb4ede5c784f819119e78982a8f&v=4",
          },
          {
            name: "Austin Scott",
            list_link:
              "https://www.amazon.com/hz/wishlist/ls/1ELBCNRC5PYT8?ref_=wl_share",
            picture_link:
              "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/74906731_969500946747584_7331551574189146112_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=xABbOywL1l4AX9QQDW0&_nc_ht=scontent-atl3-1.xx&oh=166aed7af7ce7756b4348a84c161b050&oe=5FAC6F68",
          },
          {
            name: "Rebecca",
            list_link:
              "https://www.amazon.com/hz/wishlist/ls/3AQFPHZ352EHU?ref_=wl_share",
            picture_link:
              "https://www.onap.org/wp-content/uploads/sites/20/2017/05/Blank_woman_placeholder.svg_.png",
          },
          {
            name: "Brooke Winings",
            list_link:
              "https://www.amazon.com/hz/wishlist/ls/2R5BKDXTOC8SK?ref_=wl_share",
            picture_link:
              "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/65149050_10216704956954622_2017085065049145344_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=lg9zJ7Dj-OgAX_Zp-aZ&_nc_oc=AQmHca0faYa1UGL2b0vrxxt3zwbLabA2r3gFmaLYavEjSO2_-efmXOP_lYv5nhz8P8E&_nc_ht=scontent-atl3-1.xx&oh=ee0f1150c040a8f325246a02ae6a6bf9&oe=5FA8EB23",
          },
          {
            name: "Grandma",
            list_link:
              "https://www.amazon.com/hz/wishlist/ls/2BEPUX9LQXNL8?ref=cm_sw_sm_r_wl_ip_scsHz3tuLSTqV",
            picture_link:
              "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/120890622_3472306806141314_3476134829471141951_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=uFKQAQgVNlkAX8ZE6Up&_nc_ht=scontent-atl3-1.xx&oh=13874035e761d695e9c713b406397821&oe=5FAC556A",
          },
          {
            name: "Caitlyn",
            list_link:
              "https://www.amazon.com/hz/wishlist/ls/9RUHF2AYJ82?ref_=wl_share",
            picture_link:
              "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/62123773_2692359804112266_9062719957673967616_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=GmV-NzGnYB0AX_ZKTyV&_nc_ht=scontent-atl3-1.xx&oh=eb46d44d9523519d41985df9d7cdfe2e&oe=5FAB77AA",
          },
        ]}
      />
      </>
    );
}

export default List1;