import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mainFooter">
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <Link
                to={"/"}
                className="d-flex align-items-center p-0 text-dark"
              >
                <img
                  alt="logo"
                  className="imageLogo"
                  src={require(`../storeIcon.jpg`)}
                  width="30px"
                />
              </Link>
              <p className="my-3" style={{ width: "250px" }}>
                is one of the fastest growing e-commerce companies in Europe and
                became Hamburg's first unicorn company in 2018. As a
              </p>
              <CDBBox display="flex" className="mt-4">
                <CDBBtn flat color="dark">
                  <CDBIcon fab icon="facebook-f" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="mx-3">
                  <CDBIcon fab icon="twitter" />
                </CDBBtn>
                <CDBBtn flat color="dark" className="p-2">
                  <CDBIcon fab icon="instagram" />
                </CDBBtn>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Devwares
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink>
                  <Link to={"/Resources"}>Resources</Link>{" "}
                </CDBFooterLink>
                <CDBFooterLink>
                  <Link to={"/Resources"}>Blog</Link>{" "}
                </CDBFooterLink>
                <CDBFooterLink>
                  <Link to={"/Resources"}>Contact</Link>{" "}
                </CDBFooterLink>
                <CDBFooterLink>
                  <Link to={"/Resources"}>About Us</Link>{" "}
                </CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Help
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink>
                  <Link to={"/Resources"}>Sign In</Link>{" "}
                </CDBFooterLink>
                <CDBFooterLink>
                  <Link to={"/Resources"}>Sign Up</Link>{" "}
                </CDBFooterLink>
                <CDBFooterLink>
                  <Link to={"/Resources"}>Support</Link>{" "}
                </CDBFooterLink>
              </CDBBox>
            </CDBBox>
            <CDBBox>
              <p className="h5 mb-4" style={{ fontWeight: "600" }}>
                Products
              </p>
              <CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
                <CDBFooterLink>
                  {" "}
                  <Link to={"/Resources"}>Contrast</Link>{" "}
                </CDBFooterLink>
                <CDBFooterLink>
                  {" "}
                  <Link to={"/Resources"}>Loop</Link>{" "}
                </CDBFooterLink>
                <CDBFooterLink>
                  {" "}
                  <Link to={"/Resources"}>Windframe</Link>{" "}
                </CDBFooterLink>
              </CDBBox>
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">
            &copy; Ran Farjun, 2022. All rights reserved.
          </small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
};

export default Footer;
