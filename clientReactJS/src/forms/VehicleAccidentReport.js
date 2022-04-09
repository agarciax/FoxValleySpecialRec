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
  const [Title2_3, setTitle2_3] = useState('');
  const [Business_Phone2_4, setBusiness_Phone2_4] = useState('');
  const [Business_Email2_4, setBusiness_Email2_4] = useState('');
  const [Incident_Occur2_5, setIncident_Occur2_5] = useState('');
  const [NameOfLocation2_6, setNameOfLocation2_6] = useState('');
  const [DamageThirdParty2_7, setDamageThirdParty2_7] = useState('');
  const [StreetAddress2_7, setStreetAddress2_7] = useState('');
  const [CityIncidentLocation2_7, setCityIncidentLocation2_7] = useState("")
  const [StateIncidentLocation2_7, setStateIncidentLocation2_7] = useState('');
  const [ZipCode2_7, setZipCode2_7] = useState('');
  const [LocationProperty2_8, setLocationProperty2_8] = useState('');
  const [PrimaryLocation2_9, setPrimaryLocation2_9] = useState('');
  const [VehicleOccupied2_10, setVehicleOccupied2_10] = useState('');
  const [AgencyDriverLast2_11, setAgencyDriverLast2_11] = useState('');
  const [Address2_11, setAddress2_11] = useState('');
  const [City2_11, setCity2_11] = useState('');
  const [State2_11, setState2_11] = useState('');
  const [ZipCode2_11, setZipCode2_11] = useState('');
  const [HomePhone2_11, setHomePhone2_11] = useState('');
  const [WorkPhone2_11, setWorkPhone2_11] = useState('');
  const [cellPhone2_11, setCellPhone2_11] = useState('');
  const [email2_11, setEmail2_11] = useState('');
  const [employee2_11, setEmployee2_11] = useState('');
  const [jobTitle2_11, setJobTitle2_11] = useState('');
  const [employementStatus2_11, setEmployementStatus2_11] = useState('');
  const [agencyVIN2_12, setAgencyVIN2_12] = useState('');
  const [make2_12, setMake2_12] = useState('');
  const [model2_12, setModel2_12] = useState('');
  const [license2_12, setLicense2_12] = useState('');
  const [vehicleDriveable2_13, setVehicleDriveable2_13] = useState('');
  const [locationVehicle2_13, setLocationVehicle2_13] = useState('');
  const [area2_14, setArea2_14] = useState('');
  const [estimate2_15, setEstimate2_15] = useState('');
  const [trailorInvolved2_16, setTrailorInvolved2_16] = useState('');
  const [agencyVIN2_16, setAgencyVIN2_16] = useState('');
  const [make2_16, setMake2_16] = useState('');
  const [model2_16, setModel2_16] = useState('');
  const [license2_16, setLicense2_16] = useState('');
  const [trailerArea2_16, setTrailerArea2_16] = useState('');
  const [trailerLocation2_16, setTrailerLocation2_16] = useState('');
  const [estimatedRepair2_16, setEstimatedRepair2_16] = useState('');
  const [policeConduct2_17, setPoliceConduct2_17] = useState('');
  const [policeAgency2_17, setPoliceAgency2_17] = useState('');
  const [policeNumber2_17, setPoliceNumber2_17] = useState('');
  const [agencyDriverViolation2_18, setAgencyDriverViolation2_18] = useState('');
  const [details2_18, setDetails2_18] = useState('');
  const [involement2_19, setInvolement2_19] = useState('');
  const [lastNameBuisness2_19, setLastNameBuisness2_19] = useState('');
  const [firstNameBuisness2_19, setFirstNameBuisness2_19] = useState('');
  const [address2_19, setAddress2_19] = useState('');
  const [city2_19, setCity2_19] = useState('');
  const [state2_19, setState2_19] = useState('');
  const [zipCode2_19, setZipCode2_19] = useState('');
  const [homePhone2_19, setHomePhone2_19] = useState('');
  const [workPhone2_19, setWorkPhone2_19] = useState('');
  const [cellPhone2_19, setCellPhone2_19] = useState('');
  const [vehicleMake2_19, setVehicleMake2_19] = useState('');
  const [vehicleModel2_19, setVehicleModel2_19] = useState('');
  const [vehicleYear2_19, setVehicleYear2_19] = useState('');
  const [areaDamage2_19, setAreaDamage2_19] = useState('');
  const [vehicleDriveable2_19, setVehicleDriveable2_19] = useState('');
  const [locationVehicle2_19, setLocationVehicle2_19] = useState('');
  const [damageExtent2_19, setDamageExtent2_19] = useState('');
  const [propertyDamage2_19, setPropertyDamage2_19] = useState('');
  const [damageExtentNonVehicle2_19, setDamageExtentNonVehicle2_19] = useState('');
  const [ageInjured2_19, setAgeInjured2_19] = useState('');
  const [gender2_19, setGender2_19] = useState('');
  const [paramedics2_19, setParamedics2_19] = useState('');
  const [locationTaken2_19, setLocationTaken2_19] = useState('');
  const [claim2_19, setClaim2_19] = useState('');
  const [describeInjury2_19, setDescribeInjury2_19] = useState('');
  const [involement2_19_2, setInvolement2_19_2] = useState('');
  const [lastNameBuisness2_19_2, setLastNameBuisness2_19_2] = useState('');
  const [firstNameBuisness2_19_2, setFirstNameBuisness2_19_2] = useState('');
  const [address2_19_2, setAddress2_19_2] = useState('');
  const [city2_19_2, setCity2_19_2] = useState('');
  const [state2_19_2, setState2_19_2] = useState('');
  const [zipCode2_19_2, setZipCode2_19_2] = useState('');
  const [homePhone2_19_2, setHomePhone2_19_2] = useState('');
  const [workPhone2_19_2, setWorkPhone2_19_2] = useState('');
  const [cellPhone2_19_2, setCellPhone2_19_2] = useState('');
  const [vehicleMake2_19_2, setVehicleMake2_19_2] = useState('');
  const [vehicleModel2_19_2, setVehicleModel2_19_2] = useState('');
  const [vehicleYear2_19_2, setVehicleYear2_19_2] = useState('');
  const [areaDamage2_19_2, setAreaDamage2_19_2] = useState('');
  const [vehicleDriveable2_19_2, setVehicleDriveable2_19_2] = useState('');
  const [locationVehicle2_19_2, setLocationVehicle2_19_2] = useState('');
  const [damageExtent2_19_2, setDamageExtent2_19_2] = useState('');
  const [propertyDamage2_19_2, setPropertyDamage2_19_2] = useState('');
  const [damageExtentNonVehicle2_19_2, setDamageExtentNonVehicle2_19_2] = useState('');
  const [ageInjured2_19_2, setAgeInjured2_19_2] = useState('');
  const [gender2_19_2, setGender2_19_2] = useState('');
  const [paramedics2_19_2, setParamedics2_19_2] = useState('');
  const [locationTaken2_19_2, setLocationTaken2_19_2] = useState('');
  const [claim2_19_2, setClaim2_19_2] = useState('');
  const [describeInjury2_19_2, setDescribeInjury2_19_2] = useState('');
  const [lastName2_20, setLastName2_20] = useState('');
  const [firstName2_20, setFirstName2_20] = useState('');
  const [address2_20, setAddress2_20] = useState('');
  const [city2_20, setCity2_20] = useState('');
  const [state2_20, setState2_20] = useState('');
  const [zipCode2_20, setZipCode2_20] = useState('');
  const [homePhone2_20, setHomePhone2_20] = useState('');
  const [workPhone2_20, setWorkPhone2_20] = useState('');
  const [cellPhone2_20, setCellPhone2_20] = useState('');
  const [witness2_20, setWitness2_20] = useState('');
  const [relation2_20, setRelation2_20] = useState('');
  const [statements2_20, setStatements2_20] = useState('');
  const [say2_20, setSay2_20] = useState('');
  const [where2_20, setWhere2_20] = useState('');
  const [driver_2_21, setDriver_2_21] = useState('');
  const [agencyStreet2_22, setAgencyStreet2_22] = useState('');
  const [otherStreet2_22, setOtherStreet2_22] = useState('');
  const [agencyDirection2_23, setAgencyDirection2_23] = useState('');
  const [otherDirection2_23, setOtherDirection2_23] = useState('');
  const [weather2_24, setWeather2_24] = useState('');
  const navigate = useNavigate() //Like going back and forward in "history"/back from the previous or next page


  const handleSubmit = (e) => { //Handles the onSubmit action of the log
    e.preventDefault();

    let vehicleAccidentReportObj = {}

    fetch('http://127.0.0.1:5000/fvsra/vehicleAccidentReport', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(vehicleAccidentReportObj)
    }).then(() => {
      alert("Report has been submitted!")
      navigate(-1) //Redirects page

    })
  }


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
                <div className="endInput"><input type="text" id="Title-2-3" name="Title-2-3" value={Title2_3} onChange={(e) => setTitle2_3(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '21pt'}}>
              <td className="blue-boxes">
                4
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business phone</p>
                <input type="tel" id="Business_phone2-4" name="phone2-4" placeholder="000-000-0000" required value={Business_Phone2_4} onChange={(e) => setBusiness_Phone2_4(e.target.value)} />
              </td><td style={{width: '41pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E'}}>
                <p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '2pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Business email</p>
                <div className="endInput"><input type="text" id="Business_email2-4" name="Business_email2-4" value={Business_Email2_4} onChange={(e) => setBusiness_Email2_4(e.target.value)}/></div>
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
                <div className="endInput"><input type="text" id="Incident_Occur2-5" name="Incident_Occur2-5" value={Incident_Occur2_5} onChange={(e) => setIncident_Occur2_5(e.target.value)}/></div>
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
                <div className="endInput"><input type="text" id="NameOfLocation2-6" name="NameOfLocation2-6" value={NameOfLocation2_6} onChange={(e) => setNameOfLocation2_6(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="DamageThirdParty2-7" name="DamageThirdParty2-7" value={DamageThirdParty2_7} onChange={(e) => setDamageThirdParty2_7(e.target.value)}/>
                  </div>
                </div>
                {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="DamageThirdParty2-7" name="DamageThirdParty2-7" value={DamageThirdParty2_7} onChange={(e) => setDamageThirdParty2_7(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="DamageThirdParty2-7" name="DamageThirdParty2-7" value={DamageThirdParty2_7} onChange={(e) => setDamageThirdParty2_7(e.target.value)}/>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Street address</p>
                <div className="endInput"><input type="text" id="StreetAddress2-7" name="StreetAddress2-7" value={StreetAddress2_7} onChange={(e) => setStreetAddress2_7(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '27pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="CityIncidentLocation2-7" name="CityIncidentLocation2-7" value={CityIncidentLocation2_7} onChange={(e) => setCityIncidentLocation2_7(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="StateIncidentLocation2-7" name="StateIncidentLocation2-7" value={StateIncidentLocation2_7} onChange={(e) => setStateIncidentLocation2_7(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-7" name="ZipCode2-7" placeholder="00000" pattern="[0-9]{5}" required value={ZipCode2_7} onChange={(e) => setZipCode2_7(e.target.value)}/>
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
                    <input type="radio" defaultValue="Unknown" id="location-property2-8" name="location-property2-8" value={LocationProperty2_8} onChange={(e) => setLocationProperty2_8(e.target.value)}/>
                  </div>
                  <div className="s3">
                    On agency property
                    <input type="radio" defaultValue="Unknown" id="location-property2-8" name="location-property2-8" value={LocationProperty2_8} onChange={(e) => setLocationProperty2_8(e.target.value)}/>
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
                    <input type="radio" defaultValue="Highway/roadway" id="PrimaryLocation2-9" name="DamageThirdParty" value={PrimaryLocation2_9} onChange={(e) => setPrimaryLocation2_9(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Parking Lot</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Parking Lot" id="PrimaryLocation2-9" name="DamageThirdParty" value={PrimaryLocation2_9} onChange={(e) => setPrimaryLocation2_9(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Other</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Other" id="PrimaryLocation2-9" name="DamageThirdParty" value={PrimaryLocation2_9} onChange={(e) => setPrimaryLocation2_9(e.target.value)}/>
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
                    <input type="radio" defaultValue="Yes" id="VehicleOccupied2-10" name="VehicleOccupied2-10" value={VehicleOccupied2_10} onChange={(e) => setVehicleOccupied2_10(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="VehicleOccupied2-10" name="VehicleOccupied2-10" value={VehicleOccupied2_10} onChange={(e) => setVehicleOccupied2_10(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="VehicleOccupied2-10" name="VehicleOccupied2-10" value={VehicleOccupied2_10} onChange={(e) => setVehicleOccupied2_10(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="AgencyDriverLast2-11" name="AgencyDriverLast2-11" value={AgencyDriverLast2_11} onChange={(e) => setAgencyDriverLast2_11(e.target.value)}/></div>
              </td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>First name</p>
                <div className="endInput"><input type="text" id="AgencyDriverFirst2-11" name="AgencyDriverFirst2-11" value={AgencyDriverLast2_11} onChange={(e) => setAgencyDriverLast2_11(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                <div className="endInput"><input type="text" id="Address2-11" name="Address2-11" value={Address2_11} onChange={(e) => setAddress2_11(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="City2-11" name="City2-11" /> value={City2_11} onChange={(e) => setCity2_11(e.target.value)}</div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="State2-11" name="State2-11" value={State2_11} onChange={(e) => setState2_11(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-11" name="ZipCode2-11" placeholder="00000" pattern="[0-9]{5}" required value={ZipCode2_11} onChange={(e) => setZipCode2_11(e.target.value)}/>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                <div className="endInput"><input type="text" id="HomePhone2-11" name="HomePhone2-11" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={HomePhone2_11} onChange={(e) => setHomePhone2_11(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                <div className="endInput"><input type="text" id="WorkPhone2-11" name="WorkPhone2-11" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={WorkPhone2_11} onChange={(e) => setWorkPhone2_11(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                <input type="tel" id="CellPhone2-11" name="CellPhone2-11" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={cellPhone2_11} onChange={(e) => setCellPhone2_11(e.target.value)}/>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Email</p>
                <div className="endInput"><input type="text" id="Email2-11" name="Email2-11" value={email2_11} onChange={(e) => setEmail2_11(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="Employee2-11" name="Employee2-11" value={employee2_11} onChange={(e) => setEmployee2_11(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="Employee2-11" name="Employee2-11" value={employee2_11} onChange={(e) => setEmployee2_11(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="Employee2-11" name="Employee2-11" value={employee2_11} onChange={(e) => setEmployee2_11(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="JobTitle2-11" name="JobTitle2-11" value={jobTitle2_11} onChange={(e) => setJobTitle2_11(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Full-time" id="EmployementStatus2-11" name="EmployementStatus2-11" value={employementStatus2_11} onChange={(e) => setEmployementStatus2_11(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Part-time</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Part-time" id="EmployementStatus2-11" name="EmployementStatus2-11" value={employementStatus2_11} onChange={(e) => setEmployementStatus2_11(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Seasonal</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Seasonal" id="EmployementStatus2-11" name="EmployementStatus2-11" value={employementStatus2_11} onChange={(e) => setEmployementStatus2_11(e.target.value)}/>
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
                    <input type="radio" defaultValue="Intern" id="EmployementStatus2-11" name="EmployementStatus2-11" value={employementStatus2_11} onChange={(e) => setEmployementStatus2_11(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Volunteer</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Volunteer" id="EmployementStatus2-11" name="EmployementStatus2-11" value={employementStatus2_11} onChange={(e) => setEmployementStatus2_11(e.target.value)}/>
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
                    <input type="radio" defaultValue="Non-agency employee" id="EmployementStatus2-11" name="EmployementStatus2-11" value={employementStatus2_11} onChange={(e) => setEmployementStatus2_11(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Spouse/family member</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Spouse/family member" id="EmployementStatus2-11" name="EmployementStatus2-11" value={employementStatus2_11} onChange={(e) => setEmployementStatus2_11(e.target.value)}/>
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
                    <div className="endInput"><input type="text" id="AgencyVIN2-12" name="AgencyVIN2-12" value={agencyVIN2_12} onChange={(e) => setAgencyVIN2_12(e.target.value)}/></div></div>
                  <div className="s3">
                    Make
                    <div className="endInput"><input type="text" id="Make2-12" name="Make2-12" value={make2_12} onChange={(e) => setMake2_12(e.target.value)}/></div>
                  </div>
                  <div className="s3">
                    Model
                    <div className="endInput"><input type="text" id="Model2-12" name="Model2-12" value={model2_12} onChange={(e) => setModel2_12(e.target.value)}/></div>
                  </div>
                  <div className="s3">
                    License number
                    <div className="endInput"><input type="text" id="License2-12" name="License2-12" value={license2_12} onChange={(e) => setLicense2_12(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="VehicleDriveable2-13" name="VehicleDriveable2-13" value={vehicleDriveable2_13} onChange={(e) => setVehicleDriveable2_13(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="VehicleDriveable2-13" name="VehicleDriveable2-13" value={vehicleDriveable2_13} onChange={(e) => setVehicleDriveable2_13(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="VehicleDriveable2-13" name="VehicleDriveable2-13" value={vehicleDriveable2_13} onChange={(e) => setVehicleDriveable2_13(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="LocationVehicle2-13" name="LocationVehicle2-13" value={locationVehicle2_13} onChange={(e) => setLocationVehicle2_13(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
                14
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Area of damage</p>
                <div className="endInput"><input type="text" id="Area2-14" name="Area2-14" value={area2_14} onChange={(e) => setArea2_14(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
                15
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Estimated repair cost</p>
                <div className="endInput"><input type="text" id="Estimate2-15" name="Estimate2-15" value={estimate2_15} onChange={(e) => setEstimate2_15(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="TrailorInvolved2-16" name="TrailorInvolved2-16" value={trailorInvolved2_16} onChange={(e) => setTrailorInvolved2_16(e.target.value)}/>
                  </div>
                </div>
                {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="TrailorInvolved2-16" name="TrailorInvolved2-16" value={trailorInvolved2_16} onChange={(e) => setTrailorInvolved2_16(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="TrailorInvolved2-16" name="TrailorInvolved2-16" value={trailorInvolved2_16} onChange={(e) => setTrailorInvolved2_16(e.target.value)}/>
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
                    <div className="endInput"><input type="text" id="AgencyVIN2-16" name="AgencyVIN2-16" value={agencyVIN2_16} onChange={(e) => setAgencyVIN2_16(e.target.value)}/></div>                  </div>
                  <div className="s3">
                    Make
                    <div className="endInput"><input type="text" id="Make2-16" name="Make2-16" value={make2_16} onChange={(e) => setMake2_16(e.target.value)}/></div>
                  </div>
                  <div className="s3">
                    Model
                    <div className="endInput"><input type="text" id="Model2-16" name="Model2-16" value={model2_16} onChange={(e) => setModel2_16(e.target.value)}/></div>
                  </div>
                  <div className="s3">
                    License number
                    <div className="endInput"><input type="text" id="License2-16" name="License2-16" value={license2_16} onChange={(e) => setLicense2_16(e.target.value)}/></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Trailer area of damage</p>
                <div className="endInput"><input type="text" id="TrailerArea2-16" name="TrailerArea2-16" value={trailerArea2_16} onChange={(e) => setTrailerArea2_16(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Current location of trailer</p>
                <div className="endInput"><input type="text" id="TrailerLocation2-16" name="TrailerLocation2-16" value={trailerLocation2_16} onChange={(e) => setTrailerLocation2_16(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Estimated repair cost of trailer</p>
                <div className="endInput"><input type="text" id="EstimatedRepair2-16" name="EstimatedRepair2-16" value={estimatedRepair2_16} onChange={(e) => setEstimatedRepair2_16(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="PoliceConduct2-17" name="PoliceConduct2-17" value={policeConduct2_17} onChange={(e) => setPoliceConduct2_17(e.target.value)}/>
                  </div>
                </div>
                {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="PoliceConduct2-17" name="PoliceConduct2-17" value={policeConduct2_17} onChange={(e) => setPoliceConduct2_17(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="PoliceConduct2-17" name="PoliceConduct2-17" value={policeConduct2_17} onChange={(e) => setPoliceConduct2_17(e.target.value)}/>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>What police agency investigated the incident?</p>
                <div className="endInput"><input type="text" id="PoliceAgency2-17" name="PoliceAgency2-17" value={policeAgency2_17} onChange={(e) => setPoliceAgency2_17(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>Police report number</p>
                <div className="endInput"><input type="text" id="PoliceNumber2-17" name="PoliceNumber2-17" value={policeNumber2_17} onChange={(e) => setPoliceNumber2_17(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="AgencyDriverViolation2-18" name="AgencyDriverViolation2-18" value={agencyDriverViolation2_18} onChange={(e) => setAgencyDriverViolation2_18(e.target.value)}/>
                  </div>
                </div>
                {/*                <p class="s3" style="text-indent: 0pt;line-height: 10pt;text-align: right;">Yes <div class="centerInput"><input type="checkbox" id="horns" name="horns"></div></p>*/}
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="AgencyDriverViolation2-18" name="AgencyDriverViolation2-18" value={agencyDriverViolation2_18} onChange={(e) => setAgencyDriverViolation2_18(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="AgencyDriverViolation2-18" name="AgencyDriverViolation2-18" value={agencyDriverViolation2_18} onChange={(e) => setAgencyDriverViolation2_18(e.target.value)}/>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '32pt'}}>
              <td className="blue-boxes">
              </td>
              <td colSpan={3} style={{width: '526pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}><p className="s3" style={{paddingTop: '4pt', textIndent: '0pt', textAlign: 'left'}}>If yes, provide details of the ticket, arrest or violation(s)</p>
                <div className="endInput"><input type="text" id="Details2-18" name="Details2-18" value={details2_18} onChange={(e) => setDetails2_18(e.target.value)}/></div>
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
                    <input type="checkbox" defaultValue="Driver" id="Involement2-19" name="Involement2-19" value={involement2_19} onChange={(e) => setInvolement2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Owner of other vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Owner of other vehicle" id="Involement2-19" name="Involement2-19" value={involement2_19} onChange={(e) => setInvolement2_19(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Pedestrian</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Pedestrian" id="Involement2-19" name="Involement2-19" value={involement2_19} onChange={(e) => setInvolement2_19(e.target.value)}/>
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
                    <input type="checkbox" defaultValue="Injured Person" id="Involement2-19" name="Involement2-19" value={involement2_19} onChange={(e) => setInvolement2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Passenger of agency vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Passenger of agency vehicle" id="Involement2-19" name="Involement2-19" value={involement2_19} onChange={(e) => setInvolement2_19(e.target.value)}/>
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
                    <input type="checkbox" defaultValue="Owner of involved property" id="Involement2-19" name="Involement2-19" value={involement2_19} onChange={(e) => setInvolement2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Passenger of other vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Passenger of other vehicle" id="Involement2-19" name="Involement2-19" value={involement2_19} onChange={(e) => setInvolement2_19(e.target.value)}/>
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
                    <div className="endInput"><input type="text" id="LastNameBuisness2-19" name="LastNameBuisness2-19" value={lastNameBuisness2_19} onChange={(e) => setLastNameBuisness2_19(e.target.value)}/></div>
                  </div>
                  <div className="s3">
                    First name (not necessary for buisness)
                    <div className="endInput"><input type="text" id="FirstNameBuisness2-19" name="FirstNameBuisness2-19" value={firstNameBuisness2_19} onChange={(e) => setFirstNameBuisness2_19(e.target.value)}/></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                <div className="endInput"><input type="text" id="Address2-19" name="Address2-19" value={address2_19} onChange={(e) => setAddress2_19(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="City2-19" name="City2-19" value={city2_19} onChange={(e) => setCity2_19(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="State2-19" name="State2-19" value={state2_19} onChange={(e) => setState2_19(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-19" name="ZipCode2-19" placeholder="00000" pattern="[0-9]{5}" required value={zipCode2_19} onChange={(e) => setZipCode2_19(e.target.value)}/>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                <div className="endInput"><input type="text" id="HomePhone2-19" name="HomePhone2-19" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={homePhone2_19} onChange={(e) => setHomePhone2_19(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                <div className="endInput"><input type="text" id="WorkPhone2-19" name="WorkPhone2-19" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={workPhone2_19} onChange={(e) => setWorkPhone2_19(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                <input type="tel" id="CellPhone2-19" name="CellPhone2-19" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  value={cellPhone2_19} onChange={(e) => setCellPhone2_19(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="VehicleMake2-19" name="VehicleMake2-19" value={vehicleMake2_19} onChange={(e) => setVehicleMake2_19(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Model</p>
                <div className="endInput"><input type="text" id="VehicleModel2-19" name="VehicleModel2-19" value={vehicleModel2_19} onChange={(e) => setVehicleModel2_19(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Year</p>
                <input type="tel" id="VehicleYear2-19" name="VehicleYear2-19" value={vehicleYear2_19} onChange={(e) => setVehicleYear2_19(e.target.value)}/>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Area of damage</p>
                <div className="endInput"><input type="text" id="AreaDamage2-19" name="AreaDamage2-19" value={areaDamage2_19} onChange={(e) => setAreaDamage2_19(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="VehicleDriveable2-19" name="VehicleDriveable2-19" value={vehicleDriveable2_19} onChange={(e) => setVehicleDriveable2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="VehicleDriveable2-19" name="VehicleDriveable2-19" value={vehicleDriveable2_19} onChange={(e) => setVehicleDriveable2_19(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="VehicleDriveable2-19" name="VehicleDriveable2-19" value={vehicleDriveable2_19} onChange={(e) => setVehicleDriveable2_19(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="LocationVehicle2-19" name="LocationVehicle2-19" value={locationVehicle2_19} onChange={(e) => setLocationVehicle2_19(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Moderate" id="DamageExtent2-19" name="DamageExtent2-19" value={damageExtent2_19} onChange={(e) => setDamageExtent2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Nothing Visible</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Nothing Visible" id="DamageExtent2-19" name="DamageExtent2-19" value={damageExtent2_19} onChange={(e) => setDamageExtent2_19(e.target.value)}/>
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
                    <input type="radio" defaultValue="Severe" id="DamageExtent2-19" name="DamageExtent2-19" value={damageExtent2_19} onChange={(e) => setDamageExtent2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Slight</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Slight" id="DamageExtent2-19" name="DamageExtent2-19" value={damageExtent2_19} onChange={(e) => setDamageExtent2_19(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="PropertyDamage2-19" name="PropertyDamage2-19" value={propertyDamage2_19} onChange={(e) => setPropertyDamage2_19(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Moderate" id="DamageExtentNonVehicle2-19" name="DamageExtentNonVehicle2-19" value={damageExtentNonVehicle2_19} onChange={(e) => setDamageExtentNonVehicle2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Nothing Visible</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Nothing Visible" id="DamageExtentNonVehicle2-19" name="DamageExtentNonVehicle2-19" value={damageExtentNonVehicle2_19} onChange={(e) => setDamageExtentNonVehicle2_19(e.target.value)}/>
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
                    <input type="radio" defaultValue="Severe" id="DamageExtentNonVehicle2-19" name="DamageExtentNonVehicle2-19" value={damageExtentNonVehicle2_19} onChange={(e) => setDamageExtentNonVehicle2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Slight</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Slight" id="DamageExtentNonVehicle2-19" name="DamageExtentNonVehicle2-19" value={damageExtentNonVehicle2_19} onChange={(e) => setDamageExtentNonVehicle2_19(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="AgeInjured2-19" name="AgeInjured2-19" value={ageInjured2_19} onChange={(e) => setAgeInjured2_19(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Male" id="Gender2-19" name="Gender2-19" value={gender2_19} onChange={(e) => setGender2_19(e.target.value)}/>
                  </div>
                  <div className="s3">
                    Female
                    <input type="radio" defaultValue="Female" id="Gender2-19" name="Gender2-19" value={gender2_19} onChange={(e) => setGender2_19(e.target.value)}/>
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
                    <input type="radio" defaultValue="Yes" id="Paramedics2-19" name="Paramedics2-19" value={paramedics2_19} onChange={(e) => setParamedics2_19(e.target.value)}/>
                  </div>
                  <div className="s3">
                    No
                    <input type="radio" defaultValue="No" id="Paramedics2-19" name="Paramedics2-19" value={paramedics2_19} onChange={(e) => setParamedics2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, where was the injured person taken?</p>
                <div className="endInput"><input type="text" id="LocationTaken2-19" name="LocationTaken2-19" value={locationTaken2_19} onChange={(e) => setLocationTaken2_19(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="Claim2-19" name="Claim2-19" value={claim2_19} onChange={(e) => setClaim2_19(e.target.value)}/>
                  </div>
                  <div className="s3">
                    No
                    <input type="radio" defaultValue="No" id="Claim2-19" name="Claim2-19" value={claim2_19} onChange={(e) => setClaim2_19(e.target.value)}/>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the injury</p>
                <div className="endInput"><input type="text" id="DescribeInjury2-19" name="DescribeInjury2-19" value={describeInjury2_19} onChange={(e) => setDescribeInjury2_19(e.target.value)}/></div>
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
                    <input type="checkbox" defaultValue="Driver" id="Involement2-19-2" name="Involement2-19-2" value={involement2_19_2} onChange={(e) => setInvolement2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Owner of other vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Owner of other vehicle" id="Involement2-19-2" name="Involement2-19-2" value={involement2_19_2} onChange={(e) => setInvolement2_19_2(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Pedestrian</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Pedestrian" id="Involement2-19-2" name="involement2-19-2" value={involement2_19_2} onChange={(e) => setInvolement2_19_2(e.target.value)}/>
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
                    <input type="checkbox" defaultValue="Injured Person" id="Involement2-19-2" name="Involement2-19-2" value={involement2_19_2} onChange={(e) => setInvolement2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Passenger of agency vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Passenger of agency vehicle" id="Involement2-19-2" name="Involement2-19-2" value={involement2_19_2} onChange={(e) => setInvolement2_19_2(e.target.value)}/>
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
                    <input type="checkbox" defaultValue="Owner of involved property" id="Involement2-19-2" name="Involement2-19-2" value={involement2_19_2} onChange={(e) => setInvolement2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Passenger of other vehicle</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Passenger of other vehicle" id="Involement2-19-2" name="Involement2-19-2" value={involement2_19_2} onChange={(e) => setInvolement2_19_2(e.target.value)}/>
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
                    <div className="endInput"><input type="text" id="LastNameBuisness2-19-2" name="LastNameBuisness2-19-2" value={lastNameBuisness2_19_2} onChange={(e) => setLastNameBuisness2_19_2(e.target.value)}/></div>
                  </div>
                  <div className="s3">
                    First name (not necessary for buisness)
                    <div className="endInput"><input type="text" id="FirstNameBuisness2-19-2" name="FirstNameBuisness2-19-2" value={firstNameBuisness2_19_2} onChange={(e) => setFirstNameBuisness2_19_2(e.target.value)}/></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                <div className="endInput"><input type="text" id="Address2-19-2" name="Address2-19-2" value={address2_19_2} onChange={(e) => setAddress2_19_2(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="City2-19-2" name="City2-19-2" value={city2_19_2} onChange={(e) => setCity2_19_2(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="State2-19-2" name="State2-19-2" value={state2_19_2} onChange={(e) => setState2_19_2(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-19-2" name="ZipCode2-19-2" placeholder="00000" pattern="[0-9]{5}" required value={zipCode2_19_2} onChange={(e) => setZipCode2_19_2(e.target.value)}/>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                <div className="endInput"><input type="text" id="HomePhone2-19-2" name="HomePhone2-19-2" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={homePhone2_19_2} onChange={(e) => setHomePhone2_19_2(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                <div className="endInput"><input type="text" id="WorkPhone2-19-2" name="WorkPhone2-19-2" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={workPhone2_19_2} onChange={(e) => setWorkPhone2_19_2(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                <input type="tel" id="CellPhone2-19-2" name="CellPhone2-19-2" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={cellPhone2_19_2} onChange={(e) => setCellPhone2_19_2(e.target.value)}/>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td className="blue-boxes">
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Vehicle Make</p>
                <div className="endInput"><input type="text" id="VehicleMake2-19-2" name="VehicleMake2-19-2" value={vehicleMake2_19_2} onChange={(e) => setVehicleMake2_19_2(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Model</p>
                <div className="endInput"><input type="text" id="VehicleModel2-19-2" name="VehicleModel2-19-2" value={vehicleModel2_19_2} onChange={(e) => setVehicleModel2_19_2(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Year</p>
                <input type="tel" id="VehicleYear2-19-2" name="VehicleYear2-19-2" value={vehicleYear2_19_2} onChange={(e) => setVehicleYear2_19_2(e.target.value)}/>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Area of damage</p>
                <div className="endInput"><input type="text" id="AreaDamage2-19-2" name="AreaDamage2-19-2" value={areaDamage2_19_2} onChange={(e) => setAreaDamage2_19_2(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="VehicleDriveable2-19-2" name="VehicleDriveable2-19-2" value={vehicleDriveable2_19_2} onChange={(e) => setVehicleDriveable2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="VehicleDriveable2-19-2" name="VehicleDriveable2-19-2" value={vehicleDriveable2_19_2} onChange={(e) => setVehicleDriveable2_19_2(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="VehicleDriveable2-19-2" name="VehicleDriveable2-19-2" value={vehicleDriveable2_19_2} onChange={(e) => setVehicleDriveable2_19_2(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="LocationVehicle2-19-2" name="LocationVehicle2-19-2" value={locationVehicle2_19_2} onChange={(e) => setLocationVehicle2_19_2(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Moderate" id="DamageExtent2-19-2" name="DamageExtent2-19-2" value={damageExtent2_19_2} onChange={(e) => setDamageExtent2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Nothing Visible</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Nothing Visible" id="DamageExtent2-19-2" name="DamageExtent2-19-2" value={damageExtent2_19_2} onChange={(e) => setDamageExtent2_19_2(e.target.value)}/>
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
                    <input type="radio" defaultValue="Severe" id="DamageExtent2-19-2" name="DamageExtent2-19-2" value={damageExtent2_19_2} onChange={(e) => setDamageExtent2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Slight</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Slight" id="DamageExtent2-19-2" name="DamageExtent2-19-2" value={damageExtent2_19_2} onChange={(e) => setDamageExtent2_19_2(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="PropertyDamage2-19-2" name="PropertyDamage2-19-2" value={propertyDamage2_19_2} onChange={(e) => setPropertyDamage2_19_2(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Moderate" id="DamageExtentNonVehicle2-19-2" name="DamageExtentNonVehicle2-19-2" value={damageExtentNonVehicle2_19_2} onChange={(e) => setDamageExtentNonVehicle2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Nothing Visible</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Nothing Visible" id="DamageExtentNonVehicle2-19-2" name="DamageExtentNonVehicle2-19-2" value={damageExtentNonVehicle2_19_2} onChange={(e) => setDamageExtentNonVehicle2_19_2(e.target.value)}/>
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
                    <input type="radio" defaultValue="Severe" id="DamageExtentNonVehicle2-19-2" name="DamageExtentNonVehicle2-19-2" value={damageExtentNonVehicle2_19_2} onChange={(e) => setDamageExtentNonVehicle2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Slight</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Slight" id="DamageExtentNonVehicle2-19-2" name="DamageExtentNonVehicle2-19-2" value={damageExtentNonVehicle2_19_2} onChange={(e) => setDamageExtentNonVehicle2_19_2(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="AgeInjured2-19-2" name="AgeInjured2-19-2" value={ageInjured2_19_2} onChange={(e) => setAgeInjured2_19_2(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Male" id="Gender2-19-2" name="Gender2-19-2" value={gender2_19_2} onChange={(e) => setGender2_19_2(e.target.value)}/>
                  </div>
                  <div className="s3">
                    Female
                    <input type="radio" defaultValue="Female" id="Gender2-19-2" name="Gender2-19-2" value={gender2_19_2} onChange={(e) => setGender2_19_2(e.target.value)}/>
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
                    <input type="radio" defaultValue="Yes" id="Paramedics2-19-2" name="Paramedics2-19-2" value={paramedics2_19_2} onChange={(e) => setParamedics2_19_2(e.target.value)}/>
                  </div>
                  <div className="s3">
                    No
                    <input type="radio" defaultValue="No" id="Paramedics2-19-2" name="Paramedics2-19-2" value={paramedics2_19_2} onChange={(e) => setParamedics2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>If yes, where was the injured person taken?</p>
                <div className="endInput"><input type="text" id="LocationTaken2-19-2" name="LocationTaken2-19-2" value={locationTaken2_19_2} onChange={(e) => setLocationTaken2_19_2(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="Claim2-19-2" name="Claim2-19-2" value={claim2_19_2} onChange={(e) => setClaim2_19_2(e.target.value)}/>
                  </div>
                  <div className="s3">
                    No
                    <input type="radio" defaultValue="No" id="Claim2-19-2" name="Claim2-19-2" value={claim2_19_2} onChange={(e) => setClaim2_19_2(e.target.value)}/>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Describe the injury</p>
                <div className="endInput"><input type="text" id="DescribeInjury2-19-2" name="DescribeInjury2-19-2" value={describeInjury2_19_2} onChange={(e) => setDescribeInjury2_19_2(e.target.value)}/></div>
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
                    <div className="endInput"><input type="text" id="LastName2-20" name="LastName2-20" value={lastName2_20} onChange={(e) => setLastName2_20(e.target.value)}/></div>
                  </div>
                  <div className="s3">
                    First name
                    <div className="endInput"><input type="text" id="FirstName2-20" name="FirstName2-20" value={firstName2_20} onChange={(e) => setFirstName2_20(e.target.value)}/></div>
                  </div>
                </div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Address</p>
                <div className="endInput"><input type="text" id="Address2-20" name="Address2-20" value={address2_20} onChange={(e) => setAddress2_20(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>City</p>
                <div className="endInput"><input type="text" id="City2-20" name="City2-20" value={city2_20} onChange={(e) => setCity2_20(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>State</p>
                <div className="endInput"><input type="text" id="State2-20" name="State2-20" value={state2_20} onChange={(e) => setState2_20(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Zip code</p>
                <input type="tel" id="ZipCode2-20" name="ZipCode2-20" placeholder="00000" pattern="[0-9]{5}" required value={zipCode2_20} onChange={(e) => setZipCode2_20(e.target.value)}/>
              </td>
            </tr>
            <tr style={{height: '29pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Home phone #</p>
                <div className="endInput"><input type="text" id="HomePhone2-20" name="HomePhone2-20" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={homePhone2_20} onChange={(e) => setHomePhone2_20(e.target.value)}/></div>
              </td>
              <td style={{width: '283pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Work phone #</p>
                <div className="endInput"><input type="text" id="WorkPhone2-20" name="WorkPhone2-20" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={workPhone2_20} onChange={(e) => setWorkPhone2_20(e.target.value)}/></div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Cell phone #</p>
                <input type="tel" id="CellPhone2-20" name="CellPhone2-20" placeholder="000-000-0000" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={cellPhone2_20} onChange={(e) => setCellPhone2_20(e.target.value)}/>
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
                    <input type="radio" defaultValue="Yes" id="Witness2-20" name="Witness2-20" value={witness2_20} onChange={(e) => setWitness2_20(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="Witness2-20" name="Witness2-20" value={witness2_20} onChange={(e) => setWitness2_20(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="Witness2-20" name="Witness2-20" value={witness2_20} onChange={(e) => setWitness2_20(e.target.value)}/>
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
                    <input type="radio" defaultValue="Agency employee or volunteer" id="Relation2-20" name="Relation2-20" value={relation2_20} onChange={(e) => setRelation2_20(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Another program participant or park user</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Another program participant or park user" id="Relation2-20" name="Relation2-20" value={relation2_20} onChange={(e) => setRelation2_20(e.target.value)}/>
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
                    <input type="radio" defaultValue="Friend" id="Relation2-20" name="Relation2-20" value={relation2_20} onChange={(e) => setRelation2_20(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Relative</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Relative" id="Relation2-20" name="Relation2-20" value={relation2_20} onChange={(e) => setRelation2_20(e.target.value)}/>
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
                    <input type="radio" defaultValue="Passerby" id="Relation2-20" name="Relation2-20" value={relation2_20} onChange={(e) => setRelation2_20(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Other</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Other" id="Relation2-20" name="Relation2-20" value={relation2_20} onChange={(e) => setRelation2_20(e.target.value)}/>
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
                    <input type="radio" defaultValue="Yes" id="Statements2-20" name="Statements2-20" value={statements2_20} onChange={(e) => setStatements2_20(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="Statements2-20" name="Statements2-20" value={statements2_20} onChange={(e) => setStatements2_20(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="Statements2-20" name="Statements2-20" value={statements2_20} onChange={(e) => setStatements2_20(e.target.value)}/>
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
                <div className="endInput"><input type="text" id="Say2-20" name="Say2-20" value={say2_20} onChange={(e) => setSay2_20(e.target.value)}/></div>
              </td>
            </tr>
            <tr style={{height: '36pt'}}>
              <td bgcolor="#24418E" style={{width: '14pt'}}><p style={{textIndent: '0pt', textAlign: 'left'}}><br /></p></td>
              <td colSpan={3} style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingTop: '1pt', textIndent: '0pt', textAlign: 'left'}}>Where was the witness when the accident occurred?</p>
                <div className="endInput"><input type="text" id="Where2-20" name="Where2-20" value={where2_20} onChange={(e) => setWhere2_20(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="Yes" id="Driver2-21" name="Driver2-21" value={driver_2_21} onChange={(e) => setDriver_2_21(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <p className="s3" style={{paddingRight: '33pt', textIndent: '0pt', textAlign: 'right'}}>
                </p><div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">No</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="No" id="Driver2-21" name="Driver2-21" value={driver_2_21} onChange={(e) => setDriver_2_21(e.target.value)}/>
                    </div>
                  </div>
                  <div className="inputGrid">
                    <div className="s3-right">Unknown</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="Unknown" id="Driver2-21" name="Driver2-21" value={driver_2_21} onChange={(e) => setDriver_2_21(e.target.value)}/>
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
                    <div className="endInput"><input type="text" id="AgencyStreet2-22" name="AgencyStreet2-22" value={agencyStreet2_22} onChange={(e) => setAgencyStreet2_22(e.target.value)}/></div>
                  </div>
                  <div className="s3">
                    What street was the other driver driving on?
                    <div className="endInput"><input type="text" id="OtherStreet2-22" name="OtherStreet2-22" value={otherStreet2_22} onChange={(e) => setOtherStreet2_22(e.target.value)}/></div>
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
                    <input type="radio" defaultValue="North" id="AgencyDirection2-23" name="AgencyDirection2-23" value={agencyDirection2_23} onChange={(e) => setAgencyDirection2_23(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">South</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="South" id="AgencyDirection2-23" name="AgencyDirection2-23" value={agencyDirection2_23} onChange={(e) => setAgencyDirection2_23(e.target.value)}/>
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
                    <input type="radio" defaultValue="East" id="AgencyDirection2-23" name="AgencyDirection2-23" value={agencyDirection2_23} onChange={(e) => setAgencyDirection2_23(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">West</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="West" id="AgencyDirection2-23" name="AgencyDirection2-23" value={agencyDirection2_23} onChange={(e) => setAgencyDirection2_23(e.target.value)}/>
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
                    <input type="radio" defaultValue="North" id="OtherDirection2-23" name="OtherDirection2-23" value={otherDirection2_23} onChange={(e) => setOtherDirection2_23(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">South</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="South" id="OtherDirection2-23" name="OtherDirection2-23" value={otherDirection2_23} onChange={(e) => setOtherDirection2_23(e.target.value)}/>
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
                    <input type="radio" defaultValue="East" id="OtherDirection2-23" name="OtherDirection2-23" value={otherDirection2_23} onChange={(e) => setOtherDirection2_23(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">West</div>
                    <div className="centerInput">
                      <input type="radio" defaultValue="West" id="OtherDirection2-23" name="OtherDirection2-23" value={otherDirection2_23} onChange={(e) => setOtherDirection2_23(e.target.value)}/>
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
                    <input type="checkbox" defaultValue="Dry" id="Weather2-24" name="Weather2-24" value={weather2_24} onChange={(e) => setWeather2_24(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Fog</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Fog" id="Weather2-24" name="Weather2-24" value={weather2_24} onChange={(e) => setWeather2_24(e.target.value)}/>
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
                    <input type="checkbox" defaultValue="Ice" id="Weather2-24" name="Weather2-24" value={weather2_24} onChange={(e) => setWeather2_24(e.target.value)}/>
                  </div>
                </div>
              </td>
              <td style={{width: '202pt', borderTopStyle: 'none', borderTopWidth: '1pt', borderTopColor: '#24418E', borderBottomStyle: 'none', borderBottomWidth: '1pt', borderBottomColor: '#24418E', borderRightStyle: 'solid', borderRightWidth: '2pt', borderRightColor: '#24418E'}}>
                <div className="inputGrid">
                  <div className="inputGrid">
                    <div className="s3-right">Snow</div>
                    <div className="centerInput">
                      <input type="checkbox" defaultValue="Snow" id="Weather2-24" name="Weather2-24" value={weather2_24} onChange={(e) => setWeather2_24(e.target.value)}/>
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
                    <input type="checkbox" defaultValue="Wet" id="Weather2-24" name="Weather2-24" value={weather2_24} onChange={(e) => setWeather2_24(e.target.value)}/>
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