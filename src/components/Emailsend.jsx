import { Flex, Box,FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    Textarea,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { IoSearch } from "react-icons/io5";
  
  export default function MyForm() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
  
    const baseUrl = "https://novalinkbackend.onrender.com";
  
    const sendEmail = async () => {
      let dataSend = {
        email: email,
        subject: subject,
        message: message,
      };
      const res = await fetch(`${baseUrl}/email/sendEmail`, {
        method: "POST",
        body: JSON.stringify(dataSend),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        
        .then((res) => {
          console.log(res);
          if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
            
              
          }
        });
    };
    return (
      <div>
      <Flex align={"center"} justify={"center"} style={{backgroundColor:'#02042a',color:'white'}} > 
        <Stack align={"center"}>
          <Stack align={"center"}>
            <Heading >
            <h4 className='bright-glowing-text'>  Invite for Help or Collaborate.</h4></Heading>
            <div style={{display:"flex",flex:"row"}}>
            <input  style={{borderTopLeftRadius:'50px',borderBottomLeftRadius:'50px',width:'500px',}} type="search" placeholder='Search'></input><IoSearch  style={{color:"black", backgroundColor:"white",width:"45px",height:"38px",marginTop:"10px",borderTopRightRadius:'50px',borderBottomRightRadius:'50px'}}/>
            </div>
            
           

            <Text className="shinee">
            Need Help ? then Invite others to collaborate on projects .
            </Text>
          </Stack>
          
          <Box
          style={{backgroundColor:'#02042a'}}
          >
            <Stack >
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Receiver's Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Subject</FormLabel>
                <Input
                  style={{Width:'500px'}}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Enter the subject here..."
                />
              </FormControl>
              <FormControl id="text">
                <FormLabel>Message</FormLabel>
                <Textarea
                 style={{minWidth:'860px',height: '90px',borderRadius:'8px'}}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message here..."
                />
              </FormControl>
              <Stack >
                <Button
                  className='Marks'
                  onClick={() => sendEmail()}
                >
                Send Email
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </div>
    );
  }