import "../css/EmployeeInjuryReport_CSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"


const VehicleReport = () => {
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
                  2
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
                  <input type="time" id="Time_of_Incident" name="Time_of_Incident" required />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  3
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
                  4
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                  <input type="tel" id="Business_phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                  <div className="endInput"><input type="text" id="Business_email" name /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  5
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>How did the incident
                    occur? (Provide a brief, factual description; do not speculate on fault, etc.)</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  <div className="endInput"><input type="text" id="How_did_the_incident_occur_and_what_property_was_damaged" name="How_did_the_incident_occur_and_what_property_was_damaged" /></div>
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
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of the location (park, pool,
                    community center; <span className="s7">Ex. Smith Pool, Johnson Community Center</span>) or nearest intersection
                  </p>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>where the incident occurred.</p>
                  <div className="endInput"><input type="text" id="NameOfLocation" name="NameOfLocation" /></div>
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
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
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
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="endInput"><input type="text" id="StateIncidentLocation" name="StateIncidentLocation" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input type="tel" id="ZipCode" name="ZipCode" pattern="[0-9]{5}" required />
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
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>Location (Specify the exact type of location/facility where injury occurred. Ex. maintenance garage, sports field, aquatic
                    outdoor, golf course, etc.)</p>
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
                  9
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Primary location (Specify exact location. Ex. lap pool, cart storage, classroom, pavilion)</p>
                  <div className="endInput"><input type="text" id="PrimaryLocation" name="PrimaryLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  10
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was a person injured? (Ex. patron, citizen, participant, volunteer)</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If yes, provide the following information:</p>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Last name</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>First name</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleState" name="PersonResponsibleState" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input type="tel" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  pattern="[0-9]{5}" required />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleState" name="PersonResponsibleState" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                  <input type="tel" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Age</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid3">
                      <div className="s3">Sex</div>
                      <div className="input-right">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                      <div className="s3-left">Male</div>
                    </div>
                    <div className="inputGrid">
                      <div className="input-right">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                      <div className="s3-left">Female</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  12
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Is the injured person an agency volunteer?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="blue-boxes">
                  13
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the injury (affected body part and type of injury; Ex. contusion, bruise, laceration, sprain, break, etc.)</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  14
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did injured person make any statements?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes-bottom">
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, what did injured person say?</p>
                  <div className="endInput"><input type="text" id="WereCriminalCharges" name="WereCriminalCharges" /></div>
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
                  15
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Was first aid administered?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name and position of person who administered first aid</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>What first aid was given?</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did first aid involve AED and/or CPR?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>If yes, please submit a PDRMA post-AED form.</p>
                </td>
              </tr>
              <tr>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Were paramedic services offered?</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Called and refused (at scene by patron)
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="s3">
                      Offered and called
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Offered and refused
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="s3">
                      Offered, refused, called by agency anyway
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Unable to respond and called
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div />
                  </div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    Were police called?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="s3">If yes, provide the following information:</div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name of police department</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name of officer</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    Do you expect this person to submit a claim?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="DamageThirdParty" name="DamageThirdParty" />
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
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was property damaged as a result of this accident/incident?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If yes, how was the person involved in the accident/incident?</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Owner of property adjacent to park district
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="s3">
                      Patron
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Vehicle Owner
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="s3">
                      Other
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}>18<br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Last name (or business name)
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>                  </div>
                    <div className="s3">
                      First name (not necessary if business name)
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid4">
                    <div className="s3">
                      City
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>                  </div>
                    <div className="s3">
                      State
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                    </div>
                    <div className="s3">
                      Zip Code
                      <div className="endInput"><input type="text" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  pattern="[0-9]{5}" required /></div>
                    </div>
                    <div className="s3">
                      Phone number
                      <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Describe the property damage</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="blue-boxes">
                  19
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If there was a witness(es) to the accident/incident, please provide the following information:</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Last name
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>                  </div>
                    <div className="s3">
                      First name
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid4">
                    <div className="s3">
                      City
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>                  </div>
                    <div className="s3">
                      State
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                    </div>
                    <div className="s3">
                      Zip Code
                      <div className="endInput"><input type="text" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  pattern="[0-9]{5}" required /></div>
                    </div>
                    <div className="s3">
                      Phone number
                      <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  20
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did witness make any statements?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="blue-boxes">
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, what did witness say?</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes-bottom">21
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Where was witness when the accident/incident occurred?</p>
                  <div className="endInput"><input type="text" id="WereCriminalCharges" name="WereCriminalCharges" /></div>
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
            <tbody><tr style={{height: '21pt'}}>
                <td className="blue-boxes-top">
                  1
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
                  2
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
                  <input type="time" id="Time_of_Incident" name="Time_of_Incident" required />
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  3
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
                  4
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                  <input type="tel" id="Business_phone" name="phone" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                  <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                  <div className="endInput"><input type="text" id="Business_email" name /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  5
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>How did the incident
                    occur? (Provide a brief, factual description; do not speculate on fault, etc.)</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p>
                  <div className="endInput"><input type="text" id="How_did_the_incident_occur_and_what_property_was_damaged" name="How_did_the_incident_occur_and_what_property_was_damaged" /></div>
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
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name of the location (park, pool,
                    community center; <span className="s7">Ex. Smith Pool, Johnson Community Center</span>) or nearest intersection
                  </p>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>where the incident occurred.</p>
                  <div className="endInput"><input type="text" id="NameOfLocation" name="NameOfLocation" /></div>
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
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
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
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="endInput"><input type="text" id="StateIncidentLocation" name="StateIncidentLocation" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input type="tel" id="ZipCode" name="ZipCode"  pattern="[0-9]{5}" required />
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
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingLeft: '1pt', textIndent: '0pt', textAlign: 'left'}}>Location (Specify the exact type of location/facility where injury occurred. Ex. maintenance garage, sports field, aquatic
                    outdoor, golf course, etc.)</p>
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
                  9
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Primary location (Specify exact location. Ex. lap pool, cart storage, classroom, pavilion)</p>
                  <div className="endInput"><input type="text" id="PrimaryLocation" name="PrimaryLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  10
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was a person injured? (Ex. patron, citizen, participant, volunteer)</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If yes, provide the following information:</p>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Last name</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>First name</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleState" name="PersonResponsibleState" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                  <input type="tel" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  pattern="[0-9]{5}" required />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleState" name="PersonResponsibleState" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                  <input type="tel" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                </td>
              </tr>
              <tr style={{height: '29pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Age</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" /></div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid3">
                      <div className="s3">Sex</div>
                      <div className="input-right">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                      <div className="s3-left">Male</div>
                    </div>
                    <div className="inputGrid">
                      <div className="input-right">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                      <div className="s3-left">Female</div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  12
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Is the injured person an agency volunteer?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="blue-boxes">
                  13
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the injury (affected body part and type of injury; Ex. contusion, bruise, laceration, sprain, break, etc.)</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  14
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did injured person make any statements?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes-bottom">
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, what did injured person say?</p>
                  <div className="endInput"><input type="text" id="WereCriminalCharges" name="WereCriminalCharges" /></div>
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
            <tbody><tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  15
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Was first aid administered?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name and position of person who administered first aid</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>What first aid was given?</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did first aid involve AED and/or CPR?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>If yes, please submit a PDRMA post-AED form.</p>
                </td>
              </tr>
              <tr>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Were paramedic services offered?</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Called and refused (at scene by patron)
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="s3">
                      Offered and called
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Offered and refused
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="s3">
                      Offered, refused, called by agency anyway
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Unable to respond and called
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div />
                  </div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    Were police called?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="s3">If yes, provide the following information:</div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name of police department</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Name of officer</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '19pt'}}>
                <td className="blue-boxes" />
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    Do you expect this person to submit a claim?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="DamageThirdParty" name="DamageThirdParty" />
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
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Was property damaged as a result of this accident/incident?</p></td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="DamageThirdParty" name="DamageThirdParty" />
                    </div>
                  </div>
                  {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="DamageThirdParty" name="DamageThirdParty" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="blue-boxes">
                  11
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If yes, how was the person involved in the accident/incident?</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Owner of property adjacent to park district
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="s3">
                      Patron
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Vehicle Owner
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                    <div className="s3">
                      Other
                      <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}>18<br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Last name (or business name)
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>                  </div>
                    <div className="s3">
                      First name (not necessary if business name)
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid4">
                    <div className="s3">
                      City
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>                  </div>
                    <div className="s3">
                      State
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                    </div>
                    <div className="s3">
                      Zip Code
                      <div className="endInput"><input type="text" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  pattern="[0-9]{5}" required /></div>
                    </div>
                    <div className="s3">
                      Phone number
                      <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '32pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Describe the property damage</p>
                  <div className="endInput"><input type="text" id="StreetAddressIncidentLocation" name="StreetAddressIncidentLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td className="blue-boxes">
                  19
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingRight: '9pt', textIndent: '0pt', textAlign: 'left'}}>If there was a witness(es) to the accident/incident, please provide the following information:</p>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid">
                    <div className="s3">
                      Last name
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>                  </div>
                    <div className="s3">
                      First name
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '20pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={4} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <div className="inputGrid4">
                    <div className="s3">
                      City
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>                  </div>
                    <div className="s3">
                      State
                      <div className="endInput"><input type="text" id="PersonResponsibleName" name="PersonResponsibleName" /></div>
                    </div>
                    <div className="s3">
                      Zip Code
                      <div className="endInput"><input type="text" id="ZipCodePersonResponsible" name="ZipCodePersonResponsible"  pattern="[0-9]{5}" required /></div>
                    </div>
                    <div className="s3">
                      Phone number
                      <div className="endInput"><input type="text" id="PersonResponsibleCity" name="PersonResponsibleCity" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" /></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                  20
                </td>
                <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Did witness make any statements?</p>
                </td>
                <td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E'}}>
                  <p className="s8" style={{textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="s3-right">Yes</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Yes" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                    </div>
                  </div>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                  </p><div className="inputGrid">
                    <div className="inputGrid">
                      <div className="s3-right">No</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="No" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                    <div className="inputGrid">
                      <div className="s3-right">Unknown</div>
                      <div className="centerInput">
                        <input type="checkbox" defaultValue="Unknown" id="PoliceInvestigationYesNoUnknown" name="PoliceInvestigationYesNoUnknown" />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '36pt'}}>
                <td className="blue-boxes">
                </td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, what did witness say?</p>
                  <div className="endInput"><input type="text" id="PersonResponsibleStreetAddress" name="PersonResponsibleStreetAddress" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes-bottom">21
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Where was witness when the accident/incident occurred?</p>
                  <div className="endInput"><input type="text" id="WereCriminalCharges" name="WereCriminalCharges" /></div>
                </td>
              </tr>
            </tbody></table>
          <div className="bottom-space" />
        </div>
      </div>
     );
}
 
export default VehicleReport;