import "../css/NotificationOfInjurytoEmployerReport_CSS.css"
import "../images/icons/FVSRA_ICON.png"
import logo from ".//PDRMA Form 03 Property Loss Report_files/Image_001.jpg"


const NotificationReport = () => {
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
                        </p><h2 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Notification of Injury</h2>
                        <h2 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>to Employer Report</h2>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                          (Employee to complete and submit to supervisor or HR.)
                        </p>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '7pt', textIndent: '0pt', textAlign: 'left'}}>04E</h2>
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
                <td colSpan={3} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Employee name</p>
                  <div className="endInput"><input type="text" id="Employee_Name" name="Employee_Name" /></div>
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
                  <input type="time" id="Time_of_Incident" name="Time_of_Incident" />
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes-top">
                  3
                </td>
                <td colSpan={3} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Specific location of acident. (Ex. Second floor hallway of recreation center, storage closet of maintenance shed, south entrance of aquatic facility, etc.)</p>
                  <div className="endInput"><input type="text" id="Employee_Name" name="Employee_Name" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  4
                </td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Are you reporting the injury for the first time using this form?</p>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
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
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '25pt'}}>
                <td className="blue-boxes">
                </td>
                <td colSpan={3} style={{width: '526pt', borderTopStyle: 'none', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                    If no, when did you first report the injury (verbally or in writing) and to whom did you report it?
                  </p>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date</p>
                  <input type="date" id="Date_of_Incident" name="Date_of_Incident" defaultValue min="2021-01-01" max="2050-01-01" />
                </td>
                <td style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'none', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Time</p>
                  <input type="time" id="Time_of_Incident" name="Time_of_Incident" />
                </td>
                <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Reported to</p>
                  <div className="endInput"><input type="text" id="Reported_to" name="Reported_to" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes">
                  5
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Describe how the injury occurred. (Identify the job task you were doing and include a step-by-step explanation of what led to the injury.)
                  </p>
                  <div className="endInput"><input type="text" id="NameOfLocation" name="NameOfLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes">
                  6
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Name all people present at the time of injury (e.g., coworkers and/or witnesses)
                  </p>
                  <div className="endInput"><input type="text" id="NameOfLocation" name="NameOfLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '23pt'}}>
                <td className="blue-boxes">
                  7
                </td>
                <td colSpan={3} style={{borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Identify all body parts you injured. (Be specific. Indicate left or right, upper or lower.)
                  </p>
                  <div className="endInput"><input type="text" id="NameOfLocation" name="NameOfLocation" /></div>
                </td>
              </tr>
              <tr style={{height: '22pt'}}>
                <td className="blue-boxes">
                  8
                </td>
                <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Did you seek medical attention on the date of the accident?</p>
                </td>
                <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
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
                        <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr style={{height: '27pt'}}>
                <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                  <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, where did you seek treatment?</p>
                  <div className="endInput"><input type="text" id="Reported_to" name="Reported_to" /></div>
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
                        </p><h2 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>Notification of Injury</h2>
                        <h2 style={{textIndent: '0pt', lineHeight: '27pt', textAlign: 'center'}}>to Employer Report</h2>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>
                          (Employee to complete and submit to supervisor or HR.)
                        </p>
                      </td>
                      <td style={{width: '57pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderRightStyle: 'solid', borderRightWidth: '1pt'}} bgcolor="#25408F"><p className="head-text2" style={{paddingLeft: '7pt', paddingRight: '7pt', textIndent: '0pt', lineHeight: '15pt', textAlign: 'center'}}>
                        </p><h3 style={{paddingTop: '2pt', paddingLeft: '8pt', textIndent: '0pt', textAlign: 'left'}}>Form</h3>
                        <h2 style={{paddingTop: '3pt', paddingLeft: '7pt', textIndent: '0pt', textAlign: 'left'}}>04E</h2>
                        <p style={{paddingTop: '2pt', textIndent: '0pt', textAlign: 'center'}}>(pg. 2)</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="header-body-space" />
          <form>
            <table className="form-table">
              <tbody><tr style={{height: '22pt'}}>
                  <td className="blue-boxes">
                    9
                  </td>
                  <td colSpan={2} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E'}}>
                    <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Have you injured this body part previously?</p>
                  </td>
                  <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
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
                          <input type="radio" defaultValue="Unknown" id="DamageThirdPartyUnknown" name="DamageThirdParty" defaultChecked />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr style={{height: '27pt'}}>
                  <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                  <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                    <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, please describe which body part and what the prior injury was.</p>
                    <div className="endInput"><input type="text" id="Reported_to" name="Reported_to" /></div>
                  </td>
                </tr>
                <tr style={{height: '21pt'}}>
                  <td className="blue-boxes-top" />
                  <td colSpan={3} style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                    <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>If yes, where did you receive treatment?</p>
                    <div className="endInput"><input type="text" id="Employee_Name" name="Employee_Name" /></div>
                  </td>
                </tr>
                <tr style={{height: '25pt'}}>
                  <td className="blue-boxes" />
                  <td colSpan={3} style={{width: '526pt', borderTopStyle: 'none', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>
                      The above information is true and accurate:
                    </p>
                  </td>
                </tr>
                <tr style={{height: '27pt'}}>
                  <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
                  <td colSpan={2} style={{width: '283pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                    <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>(Employee Signature)</p>
                    <div className="endInput"><input type="text" id="Reported_to" name="Reported_to" /></div>
                  </td>
                  <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                    <p className="s3" style={{textIndent: '0pt', lineHeight: '10pt', textAlign: 'left'}}>Date</p>
                    <input type="date" id="Date_of_Incident" name="Date_of_Incident" defaultValue min="2021-01-01" max="2050-01-01" />
                  </td>
                </tr>
                <tr style={{height: '25pt'}}>
                  <td className="blue-boxes" />
                  <td colSpan={3} style={{width: '526pt', borderTopStyle: 'none', borderTopWidth: '2pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}} />
                </tr>
              </tbody></table>
            <div className="center-text">
              <button name="submit4E" onclick>Submit</button>
            </div>
          </form>
          <div className="bottom-space" />
        </div>
      </div>
     );
}
 
export default NotificationReport;