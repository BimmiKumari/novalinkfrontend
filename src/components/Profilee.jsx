import * as React from 'react';
import { useAuthContext } from '../hooks/useAuthContext'
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import LinearProgress from '@mui/joy/LinearProgress';
const data = [
    { value: 15, label: 'P' },
    { value: 8, label: 'E' },
    { value: 30, label: 'W' },
    { value: 10, label: 'R' },
  ];
  
  const size = {
    width: 400,
    height: 200,
  };
  
export default function ProfilePage() {
   
    const [variant, setVariant] = React.useState('soft');
    const { user } = useAuthContext()
  return (
    <div className="wrap">
      <div className="file1">
{/*About us card */}
           <div className='profit'> 
           <Card  sx={{ width: 264,overflow: 'auto', resize: 'horizontal', }}>  
           <Box sx={{display: 'flex', justifyContent: 'space-between',alignItems: 'center', }}>
               <Avatar src="" size="lg" />
           </Box>
           <CardContent>
           <Typography level="title-lg">{user.name}</Typography>
           
           <Typography level="body-sm">
            I am an aspiring mern stack developer seeking for internship.
            Skills: Full Stack DEvelopment || DSA || JAVA|| C++||.. 
          </Typography>
          </CardContent>
          <CardActions buttonFlex="0 1 120px">
          <Button variant="outlined" className='Marks'>Update</Button>
          </CardActions>
        </Card>
    
        <input style={{height:'100px'}}></input>
         <Button variant="outlined" >
         Change about
        </Button>        
        </div>

    <div className='linkfit'>
 {/*Pir charttttttt */}  
    <PieChart series={[
            {
               arcLabel: (item) => `${item.label} (${item.value})`,
               arcLabelMinAngle: 45,
               data,
             },]}
             sx={{
             [`& .${pieArcLabelClasses.root}`]: {
             fill: 'white',
              fontWeight: 'bold',
             },}}
           {...size} />

           </div>
        </div>
      
        <div className="file2">
            <div className="info">
              <Stack spacing={1.5} sx={{ minWidth: 300 }}>
              <label style={{color:'white',marginleft:'20px'}}>Enter your date of birth :</label>
            <Input style={{width:'1000px'}}
           type="date"
           slotProps={{
           input: {
            min: '2018-06-07T00:00',
            max: '2018-06-14T00:00',
          },
        }}
      />
    </Stack>
    <label style={{color:'white',marginleft:'20px'}}>Enter your linkedin url:</label>
    <input placeholder="https://www.linkedin.com/in/"></input>
    <label style={{color:'white',marginleft:'20px'}}>Enter your Github url:</label>
            <input type="text" placeholder='https://www.github.com/in/' />
    <label style={{color:'white',marginleft:'20px'}}>Enter correspondence address:</label>
            <input type="text" placeholder='https://www.github.com/in/' />
            <button className='Marks'>Create profile</button>
                 

                
 </div>

 
            
        <div className="Project" >

          <div className="text">
               <h2 className='bright-glowing-text'>Track your Progress</h2>
              <div style={{ paddingLeft:'30px'}}> P : Project progress &nbsp;&nbsp; E : Exercise contribution &nbsp;&nbsp;  W : Work Hour &nbsp;&nbsp; R : Engagement With Employee</div>

          </div>
            <div className='progress'>        
            <Box sx={{ width: '800px', display: 'flex',alignItems: 'center',gap: 4,
      }}
    >
      <Stack spacing={2} sx={{ flex: 1 }}>
        <LinearProgress color="primary" variant={variant} />
        <LinearProgress color="neutral" variant={variant} />
        <LinearProgress color="danger" variant={variant} />
        <LinearProgress color="success" variant={variant} />
        <LinearProgress color="warning" variant={variant} />
      </Stack>
      <Sheet
        sx={{
          background: 'transparent',
          pl: 4,
          borderLeft: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography
          level="body-sm"
          fontWeight="xl"
          id="variant-label"
          textColor="text.primary"
          mb={1}
        >
          Variant:
        </Typography>
        <RadioGroup
          size="sm"
          aria-labelledby="variant-label"
          name="variant"
          value={variant}
          onChange={(event) => setVariant(event.target.value)}
        >
          <Radio label="Solid" value="solid" />
          <Radio label="Soft" value="soft" />
          <Radio label="Outlined" value="outlined" />
          <Radio label="Plain" value="plain" />
        </RadioGroup>
      </Sheet>
    </Box>

    </div> 
     </div>


       </div>

    </div>
  );
}