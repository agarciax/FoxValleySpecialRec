import "../css/VehicleAccidentReport.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const VehicleReport = () => {
  const [AgencyName2_1, setAgencyName2_1] = useState('');
  const [TodaysDate2_1, setTodaysDate2_1] = useState('');
  const [DateIncident2_2, setDateIncident2_2] = useState('');
  const [TimeIncident2_2, setTimeIncident2_2] = useState('');
  const [Name2_3, setName2_3] = useState('');
  const [Name2_322, setName222_3] = useState('');
    return ( 
      <div>
      <div className="entire-page">
        <div className="top-space" />
        <div className="page-head">
          <div className="page-head-grid">
            <div>
              <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
              </p>
            </div>
            <div>
              <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                <tbody><tr style={{height: '16pt'}}>
                    <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                      </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Vehicle Accident Report</h1>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        (Accident involving agency vehicle. May involve bodily injury/property damage.)
                      </p>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        Attorney/Client Privileged Document
                      </p>
                    </td>
                    <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                      </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                      <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>02</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="header-body-space" />
        <table className="form-table">
          <tbody><tr style={{height: '21pt'}}>
              <td className="blue-boxes-top">
                1
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Agency name</p>
                <input type="text" id="Agency_Name2-1" name="Agency_Name2-1" value={AgencyName2_1} onChange={(e) => setAgencyName2_1(e.target.value)} />
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Today’s date</p>
                <input type="date" id="Todays_Date2-1" name="Todays_Date2-1" defaultValue min="2021-01-01" max="2050-01-01" value={TodaysDate2_1} onChange={(e) => setTodaysDate2_1(e.target.value)} />
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
                2
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date of incident (mm/dd/yyyy)</p>
                <input type="date" id="Date_of_Incident2-2" name="Date_of_Incident2-2" defaultValue min="2021-01-01" max="2050-01-01" value={DateIncident2_2} onChange={(e) => setDateIncident2_2(e.target.value)}/>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time of incident (hh/mm,
                  a.m./p.m.)</p>
                <input type="time" id="Time_of_Incident2-2" name="Time_of_Incident2-2" value={TimeIncident2_2} onChange={(e) => setTimeIncident2_2(e.target.value)} required />
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
                3
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of person completing the report</p>
                <input type="text" id="Name-2-3" name="Name-2-3" value={Name2_3} onChange={(e) => setName2_3(e.target.value)}/>
              </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Title of person completing report</p>
                <div className="endInput"><input type="text" id="Title-2-3" name="Title-2-3" /></div>
              </td>
            </tr>
            <tr style={{height: '21pt'}}>
              <td className="blue-boxes">
                4
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                <input type="tel" id="Business_phone2-4" name="phone2-4" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
              </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                <div className="endInput"><input type="text" id="Business_email2-4" name="Business_email2-4" /></div>
              </td>
            </tr>
            <tr style={{height: '25pt'}}>
              <td className="blue-boxes">
                5
              </td>
              <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>How did the incident
                  occur? (Provide a brief, factual summary.)</p>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                <div className="endInput"><input type="text" id="Incident_Occur2-5" name="Incident_Occur2-5" /></div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                {/*                <div class="endInput"><input type="text" id="HowDidIncidentOccur2" name=""></div>*/}
              </td>
            </tr>
            <tr style={{height: '4pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                {/*                <div class="endInput"><input type="text" id="HowDidIncidentOccur3" name=""></div>*/}
              </td>
            </tr>
            <tr style={{height: '23pt'}}>
              <td className="blue-boxes">
                6
              </td>
              <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of the location (street/road/highway) or nearest intersection where the incident occurred.
                </p>
                <div className="endInput"><input type="text" id="NameOfLocation2-6" name="NameOfLocation2-6" /></div>
              </td>
            </tr>
            <tr style={{height: '19pt'}}>
              <td className="blue-boxes">
                7
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                  Is there an address for incident location? If yes, please provide the following:</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="DamageThirdParty2-7" name="DamageThirdParty2-7" />
                  </div>
                </div>
                {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="DamageThirdParty2-7" name="DamageThirdParty2-7" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="DamageThirdParty2-7" name="DamageThirdParty2-7" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Street address</p>
                <div className="endInput"><input type="text" id="StreetAddress2-7" name="StreetAddress2-7" /></div>
              </td>
            </tr>
            <tr style={{height: '27pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="CityIncidentLocation2-7" name="CityIncidentLocation2-7" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="StateIncidentLocation2-7" name="StateIncidentLocation2-7" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-7" name="ZipCode2-7" placeholder="00000" pattern="[0-9]{5}" required />
              </td>
            </tr>
            <tr style={{height: '5pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
            </tr>
            <tr style={{height: '24pt'}}>
              <td className="blue-boxes">
                8
              </td>
              <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>Location</p>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Offsite (non-agency owned)
                    <input type="radio" defaultValue="Unknown" id="location-property2-8" name="location-property2-8" />
                  </div>
                  <div className="s3">
                    On agency property
                    <input type="radio" defaultValue="Unknown" id="location-property2-8" name="location-property2-8" />
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
                9
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Primary Location</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Highway/roadway</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Highway/roadway" id="PrimaryLocation2-9" name="DamageThirdParty" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Parking Lot</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Parking Lot" id="PrimaryLocation2-9" name="DamageThirdParty" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Other</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Other" id="PrimaryLocation2-9" name="DamageThirdParty" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
                10
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was the agency vehicle occupied?</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="VehicleOccupied2-10" name="VehicleOccupied2-10" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="VehicleOccupied2-10" name="VehicleOccupied2-10" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="VehicleOccupied2-10" name="VehicleOccupied2-10" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
                11
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Agency driver last name</p>
                <div className="endInput"><input type="text" id="AgencyDriverLast2-11" name="AgencyDriverLast2-11" /></div>
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>First name</p>
                <div className="endInput"><input type="text" id="AgencyDriverFirst2-11" name="AgencyDriverFirst2-11" /></div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                <div className="endInput"><input type="text" id="Address2-11" name="Address2-11" /></div>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="City2-11" name="City2-11" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="State2-11" name="State2-11" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-11" name="ZipCode2-11" placeholder="00000" pattern="[0-9]{5}" required />
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                <div className="endInput"><input type="text" id="HomePhone2-11" name="HomePhone2-11" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                <div className="endInput"><input type="text" id="WorkPhone2-11" name="WorkPhone2-11" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                <input type="tel" id="CellPhone2-11" name="CellPhone2-11" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Email</p>
                <div className="endInput"><input type="text" id="Email2-11" name="Email2-11" /></div>
              </td>
            </tr>
            <tr style={{height: '25pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Is this driver an employee?</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="Employee2-11" name="Employee2-11" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="Employee2-11" name="Employee2-11" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="Employee2-11" name="Employee2-11" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If Yes, enter job title of employee</p>
                <div className="endInput"><input type="text" id="JobTitle2-11" name="JobTitle2-11" /></div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Identify the type of driver</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Full-time</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Full-time" id="EmployementStatus2-11" name="EmployementStatus2-11" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Part-time</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Part-time" id="EmployementStatus2-11" name="EmployementStatus2-11" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Seasonal</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Seasonal" id="EmployementStatus2-11" name="EmployementStatus2-11" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Intern</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Intern" id="EmployementStatus2-11" name="EmployementStatus2-11" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Volunteer</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Volunteer" id="EmployementStatus2-11" name="EmployementStatus2-11" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Non-agency employee</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Non-agency employee" id="EmployementStatus2-11" name="EmployementStatus2-11" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Spouse/family member</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Spouse/family member" id="EmployementStatus2-11" name="EmployementStatus2-11" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td className="blue-boxes">
                12
              </td>
              <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid4">
                  <div className="s3">
                    Agency vehicle VIN
                    <div className="endInput"><input type="text" id="AgencyVIN2-12" name="AgencyVIN2-12" /></div>                  </div>
                  <div className="s3">
                    Make
                    <div className="endInput"><input type="text" id="Make2-12" name="Make2-12" /></div>
                  </div>
                  <div className="s3">
                    Model
                    <div className="endInput"><input type="text" id="Model2-12" name="Model2-12" /></div>
                  </div>
                  <div className="s3">
                    License number
                    <div className="endInput"><input type="text" id="License2-12" name="License2-12" /></div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody></table>
        <div className="bottom-space" />
      </div>
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      <div className="entire-page">
        <div className="top-space" />
        <div className="page-head">
          <div className="page-head-grid">
            <div>
              <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
              </p>
            </div>
            <div>
              <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                <tbody>
                  <tr style={{height: '16pt'}}>
                    <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                      </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Vehicle Accident Report</h1>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        (Accident involving agency vehicle. May involve bodily injury/property damage.)
                      </p>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        Attorney/Client Privileged Document
                      </p>
                    </td>
                    <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                      </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                      <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>02</h2>
                      <div className="s5-center">(pg. 2)</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="header-body-space" />
        <table className="form-table">
          <tbody><tr style={{height: '25pt'}}>
              <td className="blue-boxes">
                13
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Is this vehicle driveable?</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="VehicleDriveable2-13" name="VehicleDriveable2-13" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="VehicleDriveable2-13" name="VehicleDriveable2-13" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="VehicleDriveable2-13" name="VehicleDriveable2-13" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If no, provide current location of vehicle</p>
                <div className="endInput"><input type="text" id="LocationVehicle2-13" name="LocationVehicle2-13" /></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
                14
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Area of damage</p>
                <div className="endInput"><input type="text" id="Area2-14" name="Area2-14" /></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
                15
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Estimated repair cost</p>
                <div className="endInput"><input type="text" id="Estimate2-15" name="Estimate2-15" /></div>
              </td>
            </tr>
            <tr style={{height: '19pt'}}>
              <td className="blue-boxes">
                16
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                  Was a trailer involved?</p>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                  If yes, please provide the following:</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="TrailorInvolved2-16" name="TrailorInvolved2-16" />
                  </div>
                </div>
                {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="TrailorInvolved2-16" name="TrailorInvolved2-16" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="TrailorInvolved2-16" name="TrailorInvolved2-16" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid4">
                  <div className="s3">
                    Trailor year
                    <div className="endInput"><input type="text" id="AgencyVIN2-12" name="AgencyVIN2-12" /></div>                  </div>
                  <div className="s3">
                    Make
                    <div className="endInput"><input type="text" id="Make2-12" name="Make2-12" /></div>
                  </div>
                  <div className="s3">
                    Model
                    <div className="endInput"><input type="text" id="Model2-12" name="Model2-12" /></div>
                  </div>
                  <div className="s3">
                    License number
                    <div className="endInput"><input type="text" id="License2-12" name="License2-12" /></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Trailer area of damage</p>
                <div className="endInput"><input type="text" id="TrailerArea2-16" name="TrailerArea2-16" /></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Current location of trailer</p>
                <div className="endInput"><input type="text" id="TrailerLocation2-16" name="TrailerLocation2-16" /></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Estimated repair cost of trailer</p>
                <div className="endInput"><input type="text" id="EstimatedRepair2-16" name="EstimatedRepair2-16" /></div>
              </td>
            </tr>
            <tr style={{height: '19pt'}}>
              <td className="blue-boxes">
                17
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                  Has a police agency conducted an investigation?</p>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                  If yes, please provide the following:</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="PoliceConduct2-17" name="PoliceConduct2-17" />
                  </div>
                </div>
                {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="PoliceConduct2-17" name="PoliceConduct2-17" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="PoliceConduct2-17" name="PoliceConduct2-17" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>What police agency investigated the incident?</p>
                <div className="endInput"><input type="text" id="PoliceAgency2-17" name="PoliceAgency2-17" /></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Police report number</p>
                <div className="endInput"><input type="text" id="PoliceNumber2-17" name="PoliceNumber2-17" /></div>
              </td>
            </tr>
            <tr style={{height: '19pt'}}>
              <td className="blue-boxes">
                18
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                  Was the agency driver ticketed, arrested, or cited for violation?</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="AgencyDriverViolation2-18" name="AgencyDriverViolation2-18" />
                  </div>
                </div>
                {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="AgencyDriverViolation2-18" name="AgencyDriverViolation2-18" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="AgencyDriverViolation2-18" name="AgencyDriverViolation2-18" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>If yes, provide details of the ticket, arrest or violation(s)</p>
                <div className="endInput"><input type="text" id="Details2-18" name="Details2-18" /></div>
              </td>
            </tr>
            <tr style={{height: '14pt'}}>
              <td className="blue-boxes">
                19
              </td>
              <td colSpan={3} className="blue-boxes">
                CLAIMANT INFORMATION
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Identify other people involved in the accident (Make additional copies of this section if needed)</p>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>How was the person involved in the accident (Check all that apply)</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Driver of other vehicle</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Driver" id="Involement2-19" name="Involement2-19" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Owner of other vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Owner of other vehicle" id="Involement2-19" name="Involement2-19" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Pedestrian</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Pedestrian" id="Involement2-19" name="Involement2-19" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Injured Person</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Injured Person" id="Involement2-19" name="Involement2-19" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Passenger of agency vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Passenger of agency vehicle" id="Involement2-19" name="Involement2-19" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Owner of involved property</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Owner of involved property" id="Involement2-19" name="EmployementStatus2-11" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Passenger of other vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Passenger of other vehicle" id="Involement2-19" name="EmployementStatus2-11" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Last name or business name
                    <div className="endInput"><input type="text" id="LastNameBuisness2-19" name="LastNameBuisness2-19" /></div>
                  </div>
                  <div className="s3">
                    First name (not necessary for buisness)
                    <div className="endInput"><input type="text" id="FirstNameBuisness2-19" name="FirstNameBuisness2-19" /></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                <div className="endInput"><input type="text" id="Address2-19" name="Address2-19" /></div>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="City2-19" name="City2-19" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="State2-19" name="State2-19" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-19" name="ZipCode2-19" placeholder="00000" pattern="[0-9]{5}" required />
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                <div className="endInput"><input type="text" id="HomePhone2-19" name="HomePhone2-19" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                <div className="endInput"><input type="text" id="WorkPhone2-19" name="WorkPhone2-19" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                <input type="tel" id="CellPhone2-19" name="CellPhone2-19" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              </td>
            </tr>
          </tbody></table>
        <div className="bottom-space" />
      </div>
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      {/*PAGE BREAK*/}
      <div className="entire-page">
        <div className="top-space" />
        <div className="page-head">
          <div className="page-head-grid">
            <div>
              <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
              </p>
            </div>
            <div>
              <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                <tbody><tr style={{height: '16pt'}}>
                    <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                      </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Vehicle Accident Report</h1>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        (Accident involving agency vehicle. May involve bodily injury/property damage.)
                      </p>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        Attorney/Client Privileged Document
                      </p>
                    </td>
                    <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                      </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                      <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>02</h2>
                      <div className="s5-center">(pg. 3)</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="header-body-space" />
        <table className="form-table">
          <tbody><tr style={{height: '29pt'}}>
              <td className="blue-boxes">
                19
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Vehicle Make</p>
                <div className="endInput"><input type="text" id="VehicleMake2-19" name="VehicleMake2-19" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Model</p>
                <div className="endInput"><input type="text" id="VehicleModel2-19" name="VehicleModel2-19" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Year</p>
                <input type="tel" id="VehicleYear2-19" name="VehicleYear2-19" />
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Area of damage</p>
                <div className="endInput"><input type="text" id="AreaDamage2-19" name="AreaDamage2-19" /></div>
              </td>
            </tr>
            <tr style={{height: '25pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Is this vehicle driveable?</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="VehicleDriveable2-19" name="VehicleDriveable2-19" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="VehicleDriveable2-19" name="VehicleDriveable2-19" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="VehicleDriveable2-19" name="VehicleDriveable2-19" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If no, provide current location of vehicle</p>
                <div className="endInput"><input type="text" id="LocationVehicle2-19" name="LocationVehicle2-19" /></div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Extent of damage</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Moderate</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Moderate" id="DamageExtent2-19" name="DamageExtent2-19" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Nothing Visible</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Nothing Visible" id="DamageExtent2-19" name="DamageExtent2-19" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Severe</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Severe" id="DamageExtent2-19" name="DamageExtent2-19" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Slight</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Slight" id="DamageExtent2-19" name="DamageExtent2-19" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the property damage (other than vehicle)</p>
                <div className="endInput"><input type="text" id="PropertyDamage2-19" name="PropertyDamage2-19" /></div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Extent of damage to property other than vehicle</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Moderate</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Moderate" id="DamageExtentNonVehicle2-19" name="DamageExtentNonVehicle2-19" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Nothing Visible</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Nothing Visible" id="DamageExtentNonVehicle2-19" name="DamageExtentNonVehicle2-19" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Severe</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Severe" id="DamageExtentNonVehicle2-19" name="DamageExtentNonVehicle2-19" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Slight</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Slight" id="DamageExtentNonVehicle2-19" name="DamageExtentNonVehicle2-19" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Age of injured person</p>
                <div className="endInput"><input type="text" id="AgeInjured2-19" name="AgeInjured2-19" /></div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'none', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Sex of injured person</p>
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Male
                    <input type="radio" defaultValue="Male" id="Gender2-19" name="Gender2-19" />
                  </div>
                  <div className="s3">
                    Female
                    <input type="radio" defaultValue="Female" id="Gender2-19" name="Gender2-19" />
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'none', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Was the injured person transported by the paramedics?</p>
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Yes
                    <input type="radio" defaultValue="Yes" id="Paramedics2-19" name="Paramedics2-19" />
                  </div>
                  <div className="s3">
                    No
                    <input type="radio" defaultValue="No" id="Paramedics2-19" name="Paramedics2-19" />
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, where was the injured person taken?</p>
                <div className="endInput"><input type="text" id="LocationTaken2-19" name="LocationTaken2-19" /></div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'none', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Do you expect the injured person to file a claim?</p>
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Yes
                    <input type="radio" defaultValue="Yes" id="Claim2-19" name="Claim2-19" />
                  </div>
                  <div className="s3">
                    No
                    <input type="radio" defaultValue="No" id="Claim2-19" name="Claim2-19" />
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the injury</p>
                <div className="endInput"><input type="text" id="DescribeInjury2-19" name="DescribeInjury2-19" /></div>
              </td>
            </tr>
            <tr style={{height: '14pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} className="blue-boxes">
                ADDITIONAL CLAIMANT INFORMATION
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Identify other people involved in the accident (Make additional copies of this section if needed)</p>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>How was the person involved in the accident (Check all that apply)</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Driver of other vehicle</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Driver" id="Involement2-19-2" name="Involement2-19-2" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Owner of other vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Owner of other vehicle" id="Involement2-19-2" name="Involement2-19-2" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Pedestrian</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Pedestrian" id="Involement2-19-2" name="involement2-19-2" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Injured Person</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Injured Person" id="Involement2-19-2" name="Involement2-19-2" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Passenger of agency vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Passenger of agency vehicle" id="Involement2-19-2" name="Involement2-19-2" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Owner of involved property</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Owner of involved property" id="Involement2-19-2" name="Involement2-19-2" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Passenger of other vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Passenger of other vehicle" id="Involement2-19-2" name="Involement2-19-2" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Last name or business name
                    <div className="endInput"><input type="text" id="LastNameBuisness2-19-2" name="LastNameBuisness2-19-2" /></div>
                  </div>
                  <div className="s3">
                    First name (not necessary for buisness)
                    <div className="endInput"><input type="text" id="FirstNameBuisness2-19-2" name="FirstNameBuisness2-19-2" /></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                <div className="endInput"><input type="text" id="Address2-19-2" name="Address2-19-2" /></div>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="City2-19-2" name="City2-19-2" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="State2-19-2" name="State2-19-2" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-19-2" name="ZipCode2-19-2" placeholder="00000" pattern="[0-9]{5}" required />
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                <div className="endInput"><input type="text" id="HomePhone2-19-2" name="HomePhone2-19-2" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                <div className="endInput"><input type="text" id="WorkPhone2-19-2" name="WorkPhone2-19-2" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                <input type="tel" id="CellPhone2-19-2" name="CellPhone2-19-2" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Vehicle Make</p>
                <div className="endInput"><input type="text" id="VehicleMake2-19-2" name="VehicleMake2-19-2" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Model</p>
                <div className="endInput"><input type="text" id="VehicleModel2-19-2" name="VehicleModel2-19-2" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Year</p>
                <input type="tel" id="VehicleYear2-19-2" name="VehicleYear2-19-2" />
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Area of damage</p>
                <div className="endInput"><input type="text" id="AreaDamage2-19-2" name="AreaDamage2-19-2" /></div>
              </td>
            </tr>
            <tr style={{height: '25pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Is this vehicle driveable?</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="VehicleDriveable2-19-2" name="VehicleDriveable2-19-2" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="VehicleDriveable2-19-2" name="VehicleDriveable2-19-2" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="VehicleDriveable2-19-2" name="VehicleDriveable2-19-2" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If no, provide current location of vehicle</p>
                <div className="endInput"><input type="text" id="LocationVehicle2-19-2" name="LocationVehicle2-19-2" /></div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Extent of damage</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Moderate</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Moderate" id="DamageExtent2-19-2" name="DamageExtent2-19-2" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Nothing Visible</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Nothing Visible" id="DamageExtent2-19-2" name="DamageExtent2-19-2" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Severe</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Severe" id="DamageExtent2-19-2" name="DamageExtent2-19-2" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Slight</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Slight" id="DamageExtent2-19-2" name="DamageExtent2-19-2" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the property damage (other than vehicle)</p>
                <div className="endInput"><input type="text" id="PropertyDamage2-19-2" name="PropertyDamage2-19-2" /></div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Extent of damage to property other than vehicle</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Moderate</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Moderate" id="DamageExtentNonVehicle2-19-2" name="DamageExtentNonVehicle2-19-2" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Nothing Visible</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Nothing Visible" id="DamageExtentNonVehicle2-19-2" name="DamageExtentNonVehicle2-19-2" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Severe</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Severe" id="DamageExtentNonVehicle2-19-2" name="DamageExtentNonVehicle2-19-2" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Slight</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Slight" id="DamageExtentNonVehicle2-19-2" name="DamageExtentNonVehicle2-19-2" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Age of injured person</p>
                <div className="endInput"><input type="text" id="AgeInjured2-19-2" name="AgeInjured2-19-2" /></div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'none', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Sex of injured person</p>
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Male
                    <input type="radio" defaultValue="Male" id="Gender2-19-2" name="Gender2-19-2" />
                  </div>
                  <div className="s3">
                    Female
                    <input type="radio" defaultValue="Female" id="Gender2-19-2" name="Gender2-19-2" />
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'none', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Was the injured person transported by the paramedics?</p>
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Yes
                    <input type="radio" defaultValue="Yes" id="Paramedics2-19-2" name="Paramedics2-19-2" />
                  </div>
                  <div className="s3">
                    No
                    <input type="radio" defaultValue="No" id="Paramedics2-19-2" name="Paramedics2-19-2" />
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, where was the injured person taken?</p>
                <div className="endInput"><input type="text" id="LocationTaken2-19-2" name="LocationTaken2-19-2" /></div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'none', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Do you expect the injured person to file a claim?</p>
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Yes
                    <input type="radio" defaultValue="Yes" id="Claim2-19-2" name="Claim2-19-2" />
                  </div>
                  <div className="s3">
                    No
                    <input type="radio" defaultValue="No" id="Claim2-19-2" name="Claim2-19-2" />
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the injury</p>
                <div className="endInput"><input type="text" id="DescribeInjury2-19-2" name="DescribeInjury2-19-2" /></div>
              </td>
            </tr>
          </tbody></table>
        <div className="bottom-space" />
      </div>
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      {/*BREAK BETWEEN PAGES*/}
      <div className="entire-page">
        <div className="top-space" />
        <div className="page-head">
          <div className="page-head-grid">
            <div>
              <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src={logo} width={222} /></span>
              </p>
            </div>
            <div>
              <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                <tbody><tr style={{height: '16pt'}}>
                    <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                      </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Vehicle Accident Report</h1>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        (Accident involving agency vehicle. May involve bodily injury/property damage.)
                      </p>
                      <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                        Attorney/Client Privileged Document
                      </p>
                    </td>
                    <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                      </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                      <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>02</h2>
                      <div className="s5-center">(pg. 4)</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="header-body-space" />
        <table className="form-table">
          <tbody><tr style={{height: '36pt'}}>
              <td className="blue-boxes">
                20
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Identify witnesses of the accident. (Provide the following information for each witness. Make additional copies of this page if needed.)</p>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    Last name
                    <div className="endInput"><input type="text" id="LastName2-20" name="LastName2-20" /></div>
                  </div>
                  <div className="s3">
                    First name
                    <div className="endInput"><input type="text" id="FirstName2-20" name="FirstName2-20" /></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                <div className="endInput"><input type="text" id="Address2-20" name="Address2-20" /></div>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="City2-20" name="City2-20" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="State2-20" name="State2-20" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-20" name="ZipCode2-20" placeholder="00000" pattern="[0-9]{5}" required />
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                <div className="endInput"><input type="text" id="HomePhone2-20" name="HomePhone2-20" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                <div className="endInput"><input type="text" id="WorkPhone2-20" name="WorkPhone2-20" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                <input type="tel" id="CellPhone2-20" name="CellPhone2-20" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
              </td>
            </tr>
            <tr style={{height: '25pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Witness to accident?</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="Witness2-20" name="Witness2-20" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="Witness2-20" name="Witness2-20" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="Witness2-20" name="Witness2-20" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, provide the following information</p>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Relation to injured person or property owner:</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Agency employee or volunteer</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Agency employee or volunteer" id="Relation2-20" name="Relation2-20" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Another program participant or park user</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Another program participant or park user" id="Relation2-20" name="Relation2-20" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Friend</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Friend" id="Relation2-20" name="Relation2-20" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Relative</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Relative" id="Relation2-20" name="Relation2-20" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Passerby</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Passerby" id="Relation2-20" name="Relation2-20" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Other</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Other" id="Relation2-20" name="Relation2-20" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '25pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did the witness make any statements?</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="Statements2-20" name="Statements2-20" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="Statements2-20" name="Statements2-20" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="Statements2-20" name="Statements2-20" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, provide the following information</p>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>What did the witness say?</p>
                <div className="endInput"><input type="text" id="Say2-20" name="Say2-20" /></div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Where was the witness when the accident occurred?</p>
                <div className="endInput"><input type="text" id="Where2-20" name="Where2-20" /></div>
              </td>
            </tr>
            <tr style={{height: '25pt'}}>
              <td className="blue-boxes">
                21
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Was the driver of the agency vehicle conducting agency business at the time of the accident?</p>
              </td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="s3-right">Yes</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="Yes" id="Driver2-21" name="Driver2-21" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="Driver2-21" name="Driver2-21" />
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="Driver2-21" name="Driver2-21" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '20pt'}}>
              <td className="blue-boxes">
                22
              </td>
              <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3">
                    What street was the agency driver on?
                    <div className="endInput"><input type="text" id="AgencyStreet2-22" name="AgencyStreet2-22" /></div>
                  </div>
                  <div className="s3">
                    What street was the other driver driving on?
                    <div className="endInput"><input type="text" id="OtherStreet2-22" name="OtherStreet2-22" /></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
                23
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>What direction was the agency driver traveling?</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">North</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="North" id="AgencyDirection2-23" name="AgencyDirection2-23" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">South</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="South" id="AgencyDirection2-23" name="AgencyDirection2-23" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">East</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="East" id="AgencyDirection2-23" name="AgencyDirection2-23" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">West</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="West" id="AgencyDirection2-23" name="AgencyDirection2-23" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>What direction was the other driver traveling?</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">North</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="North" id="OtherDirection2-23" name="OtherDirection2-23" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">South</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="South" id="OtherDirection2-23" name="OtherDirection2-23" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">East</div>
                  <div className="centerInput">
                    <input type="radio" defaultValue="East" id="OtherDirection2-23" name="OtherDirection2-23" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">West</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="West" id="OtherDirection2-23" name="OtherDirection2-23" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
                24
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Weather Conditions</p></td>
              <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Dry</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Dry" id="Weather2-24" name="Weather2-24" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Fog</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Fog" id="Weather2-24" name="Weather2-24" />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Ice</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Ice" id="Weather2-24" name="Weather2-24" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Snow</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Snow" id="Weather2-24" name="Weather2-24" />
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '22pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}} /></td>
              <td style={{width: '41pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="s3-right">Wet</div>
                  <div className="centerInput">
                    <input type="checkbox" defaultValue="Wet" id="Weather2-24" name="Weather2-24" />
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="centerInput">
                    </div>
                  </div>
                  <div className="inputGrid">
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
                25
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Accident Diagram</p>
                {/*                ToDo: Add image upload ability*/}
              </td>
            </tr>
          </tbody></table>
        <div className="bottom-space" />
      </div>
    </div>
     );
}
 
export default VehicleReport;