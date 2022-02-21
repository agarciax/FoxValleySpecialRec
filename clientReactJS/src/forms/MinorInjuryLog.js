import "../css/MinorInjuryLogCSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import {useState} from "react";

// const [date, setDate] = useState('');
// const [time, setTime] = useState('');
  //const [injury, setInjury] = useState('');
// const [injuryLocation, setInjuryLocation] = useState('');
// const [treatment, setTreatment] = useState('');
// const [injuryOccur, setInjuryOccur] = useState('');
// const [facility, setFacility] = useState('');
// const [staffName, setStaffName] = useState('');


const MinorInjury = () => {
    return (  
<div>
        <img className="MLF_FVSRA" src={logo} />
        <table className="MLF_shift-down">
          <colgroup><col width={120} />
            <col width={110} />
            <col width={220} />
            <col width={130} />
            <col width={150} />
            <col width={350} />
            <col width={200} />
            <col width={140} />
          </colgroup><thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name of Injury</th>
              <th>Injury Location</th>
              <th>Treatment</th>
              <th>How injury occurred</th>
              <th>Facility/Location where injury occurred</th>
              <th>Full Name of staff who noticed guardian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="date" name="date" id="date" /></td>
              <td><input type="time" name="time" id="time" /></td>
              <td><input type="text" placeholder="i.e Incision" name="injury" id="injury"  required /></td>
              <td><input type="text" placeholder="i.e Right Leg" name="injury-location" id="injury-location" required /></td>
              <td><input type="text" placeholder="i.e Bandage" name="treatment" id="treatment" required /></td>
              <td><input type="text" placeholder="i.e Slipped on wet floor" name="injury-occur" id="injury-occur" required /></td>
              <td><input type="text" placeholder="i.e Food Court" name="facility" id="facility" required /></td>
              <td><input type="text" placeholder="John Doe" name="staff-name" id="staff-name" required /></td>
            </tr>
          </tbody>
        </table>
      
          <footer className="MLF_bottom">
          <button className="MLF_submit" onclick="submitBtn()">Submit</button>
        </footer>
        </div>
    );
}
 
export default MinorInjury;