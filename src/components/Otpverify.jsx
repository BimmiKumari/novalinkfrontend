import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
  } from "@chakra-ui/react";
  import { useState } from "react";
 
  
  export default function MyForm2() {
    const [email, setEmail] = useState("");
  
    const baseUrl = "https://novalinkbackend.onrender.com";
  
    const sendEmail = async () => {
      let dataSend = {
        email: email,
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
      <Flex>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
          <Heading >
            <h4 className='bright-glowing-text'> Send OTP to the account </h4></Heading>
           </Stack>
          <Box>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Receiver's Email Address"
                  onChange={(e) => setEmail(e.target.value)}
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
    );
  }