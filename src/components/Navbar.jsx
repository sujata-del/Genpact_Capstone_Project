// import React from 'react';
// import styled from 'styled-components';
// import { FaUserCircle } from 'react-icons/fa';
// import { SiOverleaf } from "react-icons/si";
// import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook


// const NavbarContainer = styled.nav`
//   background: white;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.5rem 2rem;
//   box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow for uplift effect */
//   max-width: 100%; /* Decreased length */
//   margin:1 rem;
// `;

// const Brand = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const BrandIcon = styled(SiOverleaf)`
//   font-size: 2rem;
//   margin-right: 0.5rem;
//   color: #004d40; /* Dark green icon */
// `;

// const BrandName = styled.span`
//   font-size: 1.8rem;
//   font-weight: bold;
//   color: #004d40;
// `;

// const NavLinks = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
// `;

// const NavLink = styled.a`
//   color: #004d40;
//   text-decoration: none;
//   margin: 0 1rem;
//   font-size: 1.2rem;
//   font-weight: 500;
//   transition: color 0.3s, transform 0.3s;

//   &:hover {
//     color: #32a852; /* Matching hover color */
//     transform: translateY(-2px); /* Slight uplift on hover */
//   }
// `;

// const AuthButtons = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const AuthButton = styled.button`
//   background: transparent; /* No background color */
//   color: #004d40;
//   border: 2px solid #004d40; /* Only border */
//   padding: 0.3rem;
//   margin-left: 1rem;
//   margin-right: 1rem;
//   border-radius: 8px;
//   cursor: pointer;
//   transition: background 0.3s, color 0.3s, transform 0.3s;

//   &:hover {
//     background: #004d40; /* Background color on hover */
//     color: white; /* Text color on hover */
//     transform: translateY(-2px); /* Slight uplift on hover */
//   }
// `;

// const ProfileIcon = styled(FaUserCircle)`
//   font-size: 2rem;
//   cursor: pointer;
//   transition: color 0.3s, transform 0.3s;
//   color: #004d40;

//   &:hover {
//     color: #32a852; /* Matching hover color */
//     transform: translateY(-2px); /* Slight uplift on hover */
//   }
// `;

// const Navbar = () => {
//   const navigate = useNavigate();  // Initialize the useNavigate hook

//   const handleLoginClick = () => {
//     navigate('/login');  // Navigate to the login page
//   };

//   const handleSignupClick = () => {
//     navigate('/signup');  // Navigate to the signup page
//   };
//   const handleAboutUs=()=>{
//     navigate('/about');
//   }

//   return (
//     <NavbarContainer>
//       <Brand>
//         <BrandIcon />
//         <BrandName>GreenIT</BrandName>
//       </Brand>
//       <NavLinks>
//         <NavLink href="#home">Home</NavLink>
//         <NavLink href="#contact">Contact Us</NavLink>
//         <NavLink href="#about">About Us</NavLink>
//       </NavLinks>
//       <AuthButtons>
//         <AuthButton onClick={handleLoginClick}>Login</AuthButton>
//         <AuthButton onClick={handleSignupClick}>Sign Up</AuthButton>
//         <ProfileIcon />
//       </AuthButtons>
//     </NavbarContainer>
//   );
// };

// export default Navbar;

import React from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { SiOverleaf } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 100%;
  margin: 1rem;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
`;

const BrandIcon = styled(SiOverleaf)`
  font-size: 2rem;
  margin-right: 0.5rem;
  color: #004d40;
`;

const BrandName = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: #004d40;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const NavLink = styled.div`
  color: #004d40;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #32a852;
    transform: translateY(-2px);
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
`;

const AuthButton = styled.button`
  background: transparent;
  color: #004d40;
  border: 2px solid #004d40;
  padding: 0.3rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background: #004d40;
    color: white;
    transform: translateY(-2px);
  }
`;

const ProfileIcon = styled(FaUserCircle)`
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s, transform 0.3s;
  color: #004d40;

  &:hover {
    color: #32a852;
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <NavbarContainer>
      <Brand>
        <BrandIcon />
        <BrandName>GreenIT</BrandName>
      </Brand>
      <NavLinks>
        <NavLink onClick={() => handleNavClick('/home')}>Home</NavLink>
        <NavLink onClick={() => handleNavClick('/contact')}>Contact Us</NavLink>
        <NavLink onClick={() => handleNavClick('/about')}>About Us</NavLink>
      </NavLinks>
      <AuthButtons>
        <AuthButton onClick={handleLoginClick}>Login</AuthButton>
        <AuthButton onClick={handleSignupClick}>Sign Up</AuthButton>
        <ProfileIcon />
      </AuthButtons>
    </NavbarContainer>
  );
};

export default Navbar;
