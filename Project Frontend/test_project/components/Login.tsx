'use client';

import { useState } from "react";
import {motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff} from "lucide-react";


const Login: React.FC = () => {
    // Local state for form inputs
    const [email, SetEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
  
    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      // Insert your login logic here (e.g., API call)
      console.log('Logging in with:', { email, password });
    };

    return(
        <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-centere p4">
            <motion.div
                initial={{ opacity: 0, y: -20}}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5}}
                className="w-full max-w-md"
            >
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter">Welcome back</h1>
                        <p className="text-gray-500">Eneter your credentials to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="" value={email} onChange={(e) => SetEmail(e.target.value)} required/>
                        </div>

                        <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input id="password" type={showPassword ? "text" : "password"} placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex item-center justify-between">
                            <div className="flex item-center space-x-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remember me</Label>
                            </div>
                            <a href="#" className="text-sm text-primary-500 hover:text-primary-600"> Forgot password?</a>
                        </div>

                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </form>

                </div>
                
            </motion.div>
            
        </div>
    );
};

export default Login;