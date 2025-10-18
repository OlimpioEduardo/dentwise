
import {SignedIn, SignedOut, SignOutButton, SignUpButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div>
     <h1>Home Page</h1>
     <SignedOut> {/* Qunado estivermos deslogados veremos o o botao de log in */}
      <SignUpButton mode="modal">Sign Up</SignUpButton>
     </SignedOut>

     <SignedIn>
      <SignOutButton>LogOut</SignOutButton>
     </SignedIn>
    </div>
  );
}
