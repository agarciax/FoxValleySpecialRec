import "../css/EmployeeInjuryReport_CSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"

const  EmployeeInjury = () => {
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
                        </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center', paddingTop: '9pt'}}>Employee Injury Report</h1>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>04</h2>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="header-body-space" />
          <table className="form-table">
            <tbody><tr style={{height: '24pt'}}>
                <td className="blue-boxes">
                  1
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Complete an Employee Injury Report for each employee injured.</p>
                </td>
              </tr>
              <tr style={{height: '21pt'}}>
                <td className="blue-boxes-top">
                  2
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Agency name</p>
                  <input type="text" id="Agency_Name" name="Agency_Name" />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Today’s date</p>
                  <input type="date" id="Todays_Date" name="Today's_Date" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  3
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date of incident (mm/dd/yyyy)</p>
                  <input type="date" id="Date_of_Incident" name="Date_of_Incident" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time of incident (hh/mm,
                    a.m./p.m.)</p>
                  <input type="time" id="Time_of_Incident" name="Time_of_Incident" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  4
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of person completing the report</p>
                  <input type="text" id="Name_of_person_completing_the_report" name="Name_of_person_completing_the_report" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Title of person completing report</p>
                  <div className="endInput"><input type="text" id="Title_of_person_completing_report" name /></div>
                </td>
              </tr>
              <tr style={{height: '21pt'}}>
                <td className="blue-boxes">
                  5
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                  <input type="tel" id="Business_phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                  <div className="endInput"><input type="text" id="Business_email" name /></div>
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="blue-boxes">
                  6
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>How did the incident occur? (Provide a one-line factual description.)</p>
                  <div className="endInput"><input type="text" id="PrimaryLocation" name="PrimaryLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes">
                  7
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of the location (park, pool,
                    community center; <span className="s7">Ex. Smith Pool, Johnson Community Center</span>) or nearest intersection
                  </p>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>where the incident occurred.</p>
                  <div className="endInput"><input type="text" id="NameOfLocation" name="NameOfLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="blue-boxes">
                  8
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Is there an address
                    for incident location? If yes, please provide the following:</p></td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Street address</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="endInput"><input type="text" id="CityIncidentLocation" name="CityIncidentLocation" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="endInput"><input type="text" id="StateIncidentLocation" name="StateIncidentLocation" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input type="tel" id="ZipCode" name="ZipCode"  pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '5pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="blue-boxes">
                  9
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>Location (Specify the
                    exact type of location/facility damaged, listing multiple locations/facilities if necessary. <span className="s7">Ex. mainte-</span></p>
                  <p className="s7" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>nance garage, sports field<span className="s3">)</span></p>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  <div className="endInput"><input type="text" id="LocationSpecify" name="LocationSpecify" /></div>
                </td>
              </tr>
              <tr style={{height: '6pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  {/*                <div class="endInput"><input type="text" id="LocationSpecify2" name=""></div>*/}
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="blue-boxes">
                  10
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Primary location (Specify exact location. Ex. lap pool, cart storage, classroom, pavilion)</p>
                  <div className="endInput"><input type="text" id="PrimaryLocation" name="PrimaryLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Employer’s FEIN</p>
                  <div className="endInput"><input type="text" id="EstimateOfLoss" name="EstimateOfLoss" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  12
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Did the employee miss more than three (3) scheduled workdays?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Yes" id="DamageThirdPartyYes" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '24pt'}}>
                <td className="blue-boxes">
                  13
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>What was the employee doing when the accident occurred?</p>
                  <div className="endInput"><input type="text" id="ContactPersonFacility" name="ContactPersonFacility" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes">
                  14
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>How did the incident occur? (Provide a detailed factual description.)</p>
                  <div className="endInput"><input type="text" id="ContactPersonEmail" name="ContactPersonEmail" /></div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="blue-boxes">
                  15
                </td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Employee last name</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>First name</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes" />
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="endInput"><input type="text" id="ContactPersonEmail" name="ContactPersonEmail" /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleState" name="PersonResponsibleState" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input type="tel" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                  <input type="tel" id="Business_phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                  <input type="tel" id="Business_phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                  <input type="tel" id="Business_phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Best number to contact employee</p>
                  <input type="text" id="Name_of_person_completing_the_report" name="Name_of_person_completing_the_report" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Email</p>
                  <div className="endInput"><input type="text" id="Title_of_person_completing_report" name /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Social security number</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Date of birth (mm/dd/yyyy)</p>
                  <input type="date" id="Todays_Date" name="Today's_Date" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Gender</p>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">Male</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Female</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Marital status (divorced/married/single/unknown)</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Number of dependents</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Does employee speak English?</p>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">Yes</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Average weekly wage</p>
                  <input type="text" id="Name_of_person_completing_the_report" name="Name_of_person_completing_the_report" />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Job title/occupation</p>
                  <div className="endInput"><input type="text" id="Title_of_person_completing_report" name /></div>
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
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        {/*PAGE BREAK*/}
        <div className="entire-page">
          <div className="top-space" />
          <div className="page-head">
            <div className="page-head-grid">
              <div>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><span><img alt="image" height={68} src="PDRMA%20Form%2003%20Property%20Loss%20Report_files/Image_001.jpg" width={222} /></span>
                </p>
              </div>
              <div>
                <table style={{borderCollapse: 'collapse'}} cellSpacing={0}>
                  <tbody><tr style={{height: '16pt'}}>
                      <td style={{width: '315pt', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: 'white'}} rowSpan={3} bgcolor="#25408F"><p className="head-text4" style={{paddingTop: '1pt', paddingLeft: '1pt', paddingRight: '4pt', textIndent: '0pt', textAlign: 'center'}}>
                        </p><h1 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center', paddingTop: '9pt'}}>Employee Injury Report</h1>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '14pt', textIndent: '0pt', textAlign: 'left'}}>04</h2>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>(pg. 2)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="header-body-space" />
          <table className="form-table">
            <tbody><tr style={{height: '24pt'}}>
                <td className="blue-boxes">
                  15
                </td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>What is the employee’s employment status?</p>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid-5">
                    <div className="inputGrid">
                      <div className="s3-right">Permanent full-time</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Permanent part-time</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Seasonal</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Intern</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Other</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '150pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Date hired (mm/dd/yyyy)</p>
                  <input type="date" id="Todays_Date" name="Today's_Date" defaultValue min="1940-01-01" max="2050-01-01" />
                </td>
                <td colSpan={2} style={{width: '526pt', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>What is the employee’s tenure? (length of employment)</p>
                  <div className="inputGrid-5">
                    <div className="inputGrid">
                      <div className="s3-right">Less than 1 yr.</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">1-3 yrs</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">4-10 yrs</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">11-19 yrs</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">More than 20 yrs</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes" />
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time employee began work on day of incident (hh/mm a.m./p.m.)</p>
                  <input type="time" id="Time_of_Incident" name="Time_of_Incident" />
                </td><td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}} />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes" />
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Last date employee worked prior to date of incident (mm/dd/yyyy)</p>
                  <input type="date" id="Todays_Date" name="Today's_Date" defaultValue min="2020-01-01" max="2050-01-01" />
                </td><td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}} />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes" />
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If the employee died as a result of the accident, give the date of death. (mm/dd/yyyy)</p>
                  <input type="date" id="Todays_Date" name="Today's_Date" defaultValue min="2021-01-01" max="2050-01-01" />
                </td><td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}} />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Did the incident occur on agency premises?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Yes" id="DamageThirdPartyYes" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes" />
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Injury or illness</p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">Injury</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Illness</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes" />
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Describe the injury or illness (affected body part and type of injury; Ex. contusion, bruise, laceration, sprain, break, etc.)</p>
                  <div className="endInput"><input type="text" id="ContactPersonEmail" name="ContactPersonEmail" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes" />
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>What object or substance, if any, directly harmed the employee?</p>
                  <div className="endInput"><input type="text" id="ContactPersonEmail" name="ContactPersonEmail" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">16</td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Did the injured employee seek medical attention?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Yes" id="DamageThirdPartyYes" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">17</td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>If yes, was the treatment given away from the worksite?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Yes" id="DamageThirdPartyYes" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">18</td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was the employee treated in an emergency room?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Yes" id="DamageThirdPartyYes" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">19</td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was the employee hospitalized overnight as an inpatient?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Yes" id="DamageThirdPartyYes" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="No" id="DamageThirdPartyNo" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="blue-boxes">
                  20
                </td>
                <td colSpan={3} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Name of treating physician, health care provider, or emergency room</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes" />
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="endInput"><input type="text" id="ContactPersonEmail" name="ContactPersonEmail" /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleState" name="PersonResponsibleState" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input type="tel" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  pattern="[0-9]{5}" />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '283pt', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Phone number</p>
                  <input type="tel" id="Business_phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
              </tr>
            </tbody></table>
          <div className="bottom-space" />
        </div>
      </div>
     );
}
 
export default EmployeeInjury;