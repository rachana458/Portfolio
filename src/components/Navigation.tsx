// import React, { useEffect, useState } from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import List from '@mui/material/List';
// import ListIcon from '@mui/icons-material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';


// const drawerWidth = 240;
// const navItems = [['About', 'expertise'], ['History', 'history'], ['Skills', 'projects'], ['Contact', 'contact']];

// function Navigation({parentToChild, modeChange}: any) {

//   const {mode} = parentToChild;

//   const [mobileOpen, setMobileOpen] = useState<boolean>(false);
//   const [scrolled, setScrolled] = useState<boolean>(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.getElementById("navigation");
//       if (navbar) {
//         const scrolled = window.scrollY > navbar.clientHeight;
//         setScrolled(scrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToSection = (section: string) => {
//     console.log(section)
//     const expertiseElement = document.getElementById(section);
//     if (expertiseElement) {
//       expertiseElement.scrollIntoView({ behavior: 'smooth' });
//       console.log('Scrolling to:', expertiseElement);  // Debugging: Ensure the element is found
//     } else {
//       console.error('Element with id "expertise" not found');  // Debugging: Log error if element is not found
//     }
//   };

//   const drawer = (
//     <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <p className="mobile-menu-top"><ListIcon/>Menu</p>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item[0]} disablePadding>
//             <ListItemButton
//               sx={{
//                 textAlign: 'center',
//                 '&:hover': {
//                   color: 'skyblue', // Add hover effect
//                 },
//               }}
//               onClick={() => scrollToSection(item[1])}
//             >
//              <ListItemText primary={item[0]} />
//             </ListItemButton>

//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
//         <Toolbar className='navigation-bar'>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           {mode === 'dark' ? (
//             <LightModeIcon onClick={() => modeChange()}/>
//           ) : (
//             <DarkModeIcon onClick={() => modeChange()}/>
//           )}
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//              {navItems.map((item) => (
//              <Button
//                 key={item[0]}
//                 onClick={() => scrollToSection(item[1])}
//                 sx={{
//                     color: '#fff',
//                     '&:hover': {
//                       color: 'skyblue', // Add hover effect
//                     },
//                 }}
//               >
//                {item[0]}
//               </Button>
//             ))}
//           </Box>

//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// export default Navigation;


// import React, { useEffect, useState } from "react";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import List from '@mui/material/List';
// import ListIcon from '@mui/icons-material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';

// const drawerWidth = 240;
// const navItems = [['About', 'expertise'], ['History', 'history'], ['Skills', 'projects'], ['Contact', 'contact']];

// function Navigation({ parentToChild, modeChange }: any) {
//   const { mode } = parentToChild;

//   const [mobileOpen, setMobileOpen] = useState<boolean>(false);
//   const [scrolled, setScrolled] = useState<boolean>(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.getElementById("navigation");
//       if (navbar) {
//         const scrolled = window.scrollY > navbar.clientHeight;
//         setScrolled(scrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const scrollToSection = (section: string) => {
//     const expertiseElement = document.getElementById(section);
//     if (expertiseElement) {
//       expertiseElement.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       console.error('Element with id "expertise" not found');
//     }
//   };

//   const drawer = (
//     <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <p className="mobile-menu-top"><ListIcon />Menu</p>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item[0]} disablePadding>
//             <ListItemButton
//               sx={{
//                 textAlign: 'center',
//                 '&:hover': {
//                   color: 'skyblue', // Text color on hover
//                   transform: 'scale(1.1)', // Pop effect
//                   transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
//                 },
//               }}
//               onClick={() => scrollToSection(item[1])}
//             >
//               <ListItemText primary={item[0]} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar component="nav" id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
//         <Toolbar className='navigation-bar'>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           {mode === 'dark' ? (
//             <LightModeIcon onClick={() => modeChange()} />
//           ) : (
//             <DarkModeIcon onClick={() => modeChange()} />
//           )}
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item[0]}
//                 onClick={() => scrollToSection(item[1])}
//                 sx={{
//                   color: '#fff',
//                   '&:hover': {
//                     color: 'purple', // Text color on hover
//                     transform: 'scale(1.1)', // Pop effect
//                     transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
//                   },
//                 }}
//               >
//                 {item[0]}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <nav>
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//       </nav>
//     </Box>
//   );
// }

// export default Navigation;


import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const navItems = [["About", "expertise"], ["History", "history"], ["Projects", "projects"],["Contact", "contact"]];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${section}" not found.`);
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon /> Menu
      </p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                "&:hover": {
                  color: "#5000ca", // Text hover color
                  transform: "scale(1.1)", // Pop effect
                  transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
                },
              }}
              onClick={() => scrollToSection(item[1])}
            >
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Rachana Yadav in the center */}
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "left",
              fontWeight: "bold",
              fontSize: "1.5rem",
              color: "#fff",
            }}
          >
            Rachana Yadav
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#5000ca", // Text hover color
                    transform: "scale(1.3)", // Pop effect
                    transition: "transform 0.2s ease-in-out, color 0.2s ease-in-out",
                  },
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
