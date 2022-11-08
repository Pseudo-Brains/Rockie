import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
} from '@chakra-ui/react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { 
  FaUser, 
  FaShare, 
  FaKey, 
  FaBarcode, 
  FaLock 
} from "react-icons/fa";

import Userprofile from './profileFolders/Userprofile';
import Referrals from './profileFolders/Referrals';
import Apikeys from './profileFolders/Apikeys';
import Twofactor from './profileFolders/Twofactor';
import Changepassword from './profileFolders/Changepassword';

const Profile = () => {
  
  return (
    <Box 
      pb="100px">
      <Box 
        pt="40px" 
        pb="70px" 
        px="30px" 
        bg="gray.900">
        <Flex 
          align="center" 
          justify="space-between">
          <Heading 
            fontSize="4xl">
            User Profile
          </Heading>
          <Flex>
            <Link to={'#'}>Home / </Link>
            <Text>&nbsp; User</Text>
          </Flex>
        </Flex>
      </Box>

      <Box pt="80px">
        <Flex
        wrap="wrap"
        >
          {/* first box with avatar */}

          <Box 
            borderRight={["none","none","1px"]}
            w={["80%","80%","25%"]} 
            borderColor="gray.700"
            // border="2px solid #fff"
            // m="0px auto"
            >
            <Box 
              h="100px" 
              w="100px" 
              bg="white" 
              borderRadius="100px" 
              mx="auto" 
              mb="5px">
            </Box>
            <Box 
              textAlign="center" 
              mb="30px">
              <Text 
                fontSize="2xl" 
                fontWeight="bold" 
                fontFamily="sans-serif">
                Peterson Kennady
              </Text>
              <Text fontFamily="sans-serif">petersonkenn@demo.com</Text>
            </Box>

            <Box>
              <Box px='25px'>
                <Flex 
                  padding='5px'
                  align='center' 
                  fontWeight='extrabold' 
                  fontSize="1xl" 
                  fontFamily="sans-serif" 
                  gap="5px" 
                  mb="5px"
                  cursor='pointer'>
                  <NavLink to='userprofile' className='navLink'>
                    <FaUser fontSize='20px' /> 
                    <Text>User Profile</Text>
                  </NavLink>
                </Flex>

                <Flex 
                  align='center' 
                  fontWeight='extrabold' 
                  fontSize="1xl" 
                  fontFamily="sans-serif" 
                  gap="5px" 
                  mb="5px"
                  cursor='pointer'>
                  <NavLink to='referrals' className='navLink'>
                    <FaShare fontSize='20px' /> 
                    <Text>Referrals</Text>
                  </NavLink>
                </Flex>

                <Flex 
                  align='center' 
                  fontWeight='extrabold' 
                  fontSize="1xl" 
                  fontFamily="sans-serif" 
                  gap="5px" 
                  mb="5px"
                  cursor='pointer'>
                   <NavLink to='apikeys' className='navLink'>
                    <FaKey fontSize='20px' /> 
                    <Text>API Keys</Text>
                  </NavLink>
                </Flex>

                <Flex 
                  align='center' 
                  fontWeight='extrabold' 
                  fontSize="1xl" 
                  fontFamily="sans-serif" 
                  gap="5px" 
                  mb="5px"
                  cursor='pointer'>
                  <NavLink to='2FA' className='navLink'>
                    <FaBarcode fontSize='20px' /> 
                    <Text>2FA</Text>
                  </NavLink>
                </Flex>

                <Flex 
                  align='center' 
                  fontWeight='extrabold' 
                  fontSize="1xl" 
                  fontFamily="sans-serif" 
                  gap="5px" 
                  mb="5px"
                  cursor='pointer'>
                  <NavLink to='changepassword' className='navLink'>
                    <FaLock fontSize='20px' /> 
                    <Text>Change Password</Text>
                  </NavLink>
                </Flex>
              </Box>
            </Box>
          </Box>

          {/* second box with form */}
          <Box w={["100%","100%","70%"]}>
            <Routes>
              <Route path='/userProfile' element={<Userprofile />} />
              <Route path='/referrals' element={<Referrals />} />
              <Route path='/apikeys' element={<Apikeys />} />
              <Route path='/2fa' element={<Twofactor />} />
              <Route path='/changepassword' element={<Changepassword />} />
            </Routes>
          </Box>
        </Flex>
      </Box>

    </Box>
  )
}

export default Profile;