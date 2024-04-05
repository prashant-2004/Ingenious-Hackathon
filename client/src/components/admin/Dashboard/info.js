import React from "react";
import "../../../style/admin/dashboard/info.css";
const info = () => {
  return (
    <div className="info-container">
      <div className="info-head-container">Your satisfaction,<span className="guaranteed">guaranteed</span></div>
      <div className="sub-head-container">
        <div className="sub-head1">
            <h4>Happiness Pledge</h4>
            <p>If you’re not satisfied, we’ll work to make it right.</p>
        </div>
        <div className="sub-head2">
            <h4>Vetted Taskers</h4>
            <p>Taskers are always background checked before joining the platform.</p>
        </div>
        <div className="sub-head2">
            <h4>Dedicated Support</h4>
            <p>Friendly service when you need us – every day of the week.</p>
        </div>
      </div>
      <div className="mark-image"><img src="https://images.ctfassets.net/vwt5n1ljn95x/9iQ98KhxJ7uYRwguxiVBh/861425b05239b1eb27754ffdba8426ea/English_2x.png?w=256&q=75&fm=webp" width={205}></img></div>
    </div>
  );
};

export default info;
