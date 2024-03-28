import { React, useState } from "react";
import "../../../style/admin/services/goalsCard.css";

function GoalsCard() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="goalsCards">
      <div className="goalsCard">
        <h5>Strategies to Generate Revenue and Attract New Clients</h5>
        <div className="task-to-do">
          <p
            className={checked ? "strikethrough" : "task"}
            onClick={() => setChecked(!checked)}
          >
            Host workshops or classes on specialized topics
          </p>
          <input
            type="checkbox"
            className="task-to-do-checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
        </div>
        <hr />
        <div className="task-to-do-deadline">
          <h6>Today</h6>
          <p>9:15 am</p>
        </div>
      </div>
      
    </div>
  );
}

export default GoalsCard;
