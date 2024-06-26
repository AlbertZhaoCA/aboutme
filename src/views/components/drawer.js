import Box from '@mui/material/Box';
import { useState } from 'react';
import Drawermui from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Chip from '@mui/material/Chip';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';


export default function Drawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             <LibraryBooksIcon sx={{marginRight:'20px'}}/>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div >
      <Chip icon={<UnfoldMoreIcon/>} color={"info"} sx={{position:'fixed',right:'20px',top:'80px', opacity:0.3}} label="open menu" onClick={toggleDrawer(true)} />
      <Drawermui open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawermui>
    </div>
  );
}



