import "../css/MinorInjuryLogCSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";


const MinorInjury = () => {
const [date, setDate] = useState('');
const [time, setTime] = useState('');
const [injury, setInjury] = useState('');
const [injuryLocation, setInjuryLocation] = useState('');
const [treatment, setTreatment] = useState('');
const [injuryOccur, setInjuryOccur] = useState('');
const [facility, setFacility] = useState('');
const [staffName, setStaffName] = useState('');
const navigate = useNavigate() //Like going back and forward in "history"/back from the previous or next page


  const handleSubmit = (e) => { //Handles the onSubmit action of the log
    e.preventDefault();

    let minorInjuryLogObj = {
      "injury_date": date,
      "injury_time": time,
      "name_of_injured": injury,
      "injury_location": injuryLocation,
      "treatment": treatment,
      "how_injury_occurred": injuryOccur,
      "facility_where_injury_occurred": facility,
      "full_name_of_staff": staffName
    }

    fetch(process.env.REACT_APP_FOX_VALLEY_SPECIAL_REC_ENDPOINT+ '/fvsra/minorInjuryLog', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(minorInjuryLogObj)
    }).then(() => {

      navigate("/submitted") //Redirects page

    })

  }

  return (
<div>
        <img className="MLF_FVSRA" src={logo} />
  <form onSubmit={handleSubmit}>
        <table className="MLF_shift-down">
          <colgroup><col width={120} />
            <col width={110} />
            <col width={220} />
            <col width={130} />
            <col width={150} />
            <col width={350} />
            <col width={200} />
            <col width={140} /> 
          </colgroup>

          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Name of Injury</th>
              <th>Injury Location</th>
              <th>Treatment</th>
              <th>How injury occurred</th>
              <th>Facility/Location where injury occurred</th>
              <th>Full Name of staff who notified guardian</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} id="date" /></td>
              <td><input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)} id="time" /></td>
              <td><input type="text" placeholder="i.e Incision" name="injury" value={injury} onChange={(e) => setInjury(e.target.value)} id="injury"  required /></td>
              <td><input type="text" placeholder="i.e Right Leg" name="injury-location" value={injuryLocation} onChange={(e) => setInjuryLocation(e.target.value)} id="injury-location" required /></td>
              <td><input type="text" placeholder="i.e Bandage" name="treatment" value={treatment} onChange={(e) => setTreatment(e.target.value)} id="treatment" required /></td>
              <td><input type="text" placeholder="i.e Slipped on wet floor" name="injury-occur" value={injuryOccur} onChange={(e) => setInjuryOccur(e.target.value)} id="injury-occur" required /></td>
              <td><input type="text" placeholder="i.e Food Court" name="facility" value={facility} onChange={(e) => setFacility(e.target.value)} id="facility" required /></td>
              <td><input type="text" placeholder="John Doe" name="staff-name" id="staff-name" value={staffName} onChange={(e) => setStaffName(e.target.value)} required /></td>
            </tr>
          </tbody>
        </table>
      
          <footer className="MLF_bottom">
          <button className="MLF_submit">Submit</button>
        </footer>
  </form>
        </div>
    );
}
 
export default MinorInjury;