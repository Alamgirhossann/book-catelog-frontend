import { Link, useNavigate } from 'react-router-dom';
// import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
// import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
// import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
// import {
//   DropdownMenuItem,
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
// } from '../components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import logo from '../assets/images/sample logo 1.png';
import { jwtDecode } from 'jwt-decode';

export default function Navbar() {
  const [userTokent, setUserToken] = useState<any>('');
  const navigate = useNavigate();
  console.log(userTokent);

  const handleLogout = () => {
    console.log('Logout');
    localStorage.removeItem('accessToken');
    navigate('/login');
  };
  useEffect(() => {
    const user = localStorage.getItem('accessToken');
    if (user) {
      // Check if user is not null
      const userData: any = jwtDecode(user);
      setUserToken(userData);
    }
  }, []);

  return (
    <nav className="w-full h-16 fixed top text-[#000] backdrop-blur-lg z-10 border-b border-[#8d27ae]">
      <div className="h-full w-full bg-[#8d27ae]/30">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto px-4">
          <div>
            <img src={logo} alt="logo" className="w-12 h-12" />
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/allbooks">All Books</Link>
                </Button>
              </li>
              <li>
                {userTokent ? (
                  <div className="flex gap-3">
                    <p>{userTokent?.userId}</p>

                    <p className=" cursor-pointer" onClick={handleLogout}>
                      Logout
                    </p>
                  </div>
                ) : (
                  <div className="flex">
                    <li>
                      <Button variant="link" asChild>
                        <Link to="/login">Login</Link>
                      </Button>
                    </li>
                    <li>
                      <Button variant="link" asChild>
                        <Link to="/signup">Sign Up</Link>
                      </Button>
                    </li>
                  </div>
                )}
              </li>
              {/* <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li> */}

              {/* <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem> */}
              {
                // !userTokent && (
                //   <>
                //     <Link to="/login">
                //       <DropdownMenuItem className="cursor-pointer">
                //         Login
                //       </DropdownMenuItem>
                //     </Link>
                //     <Link to="/signup">
                //       <DropdownMenuItem className="cursor-pointer">
                //         Sign up
                //       </DropdownMenuItem>
                //     </Link>
                //   </>
                // )
              }
              {
                // userTokent && (
                //   <>
                //     <DropdownMenuItem className="cursor-pointer">
                //       {/* {userData.userId} */}
                //     </DropdownMenuItem>
                //     <DropdownMenuItem
                //       onClick={handleLogout}
                //       className="cursor-pointer"
                //     >
                //       Logout
                //     </DropdownMenuItem>
                //   </>
                // )
              }
              {/* </DropdownMenuContent>
                </DropdownMenu> */}
              {/* </li>  */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
