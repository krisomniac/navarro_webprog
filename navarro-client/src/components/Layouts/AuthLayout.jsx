import { Outlet } from 'react-router-dom';
import bts from '../../images/bts.jpeg';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <div className="grid min-h-screen w-full lg:grid-cols-2">
        
       
        <div className="relative hidden lg:block">
          <img 
            src={bts} 
            alt="BTS" 
            className="h-full w-full object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
        
          <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
            <h1 className="text-4xl font-bold tracking-tight">Arirang</h1>
            <p className="mt-2 text-lg opacity-90">Your gateway to BTS</p>
            <div className="mt-4 h-1 w-20 bg-red-600 rounded-full"></div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-white px-6 py-12 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">
            <div className="mb-8 lg:hidden">
              <img 
                src={bts} 
                alt="BTS" 
                className="h-32 w-full rounded-lg object-cover shadow-md"
              />
            </div>
            <Outlet />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AuthLayout;