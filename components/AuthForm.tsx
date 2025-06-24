'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    city: '',
    state: '',
    postalCode: '',
    dateOfBirth: '',
    ssn: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, simulate successful authentication
      if (type === 'sign-in') {
        router.push('/');
      } else {
        router.push('/');
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <section className="auth-card">
        <header className="flex flex-col gap-5 md:gap-8 text-center">
        <Link
          href="/"
          className="cursor-pointer flex items-center gap-1"
        >
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Azonia logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold gradient-text">
            Azonia Banking
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? 'Link Account'
              : type === 'sign-in'
              ? 'Sign In'
              : 'Sign Up'
            }
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Link your account to get started'
                : 'Please enter your details'
              }
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4">
          {/* PlaidLink component would go here */}
          <p>Connect your bank account to continue</p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-6">
            {type === 'sign-up' && (
              <>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="firstName" className="text-14 font-medium text-gray-900">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="form-input-enhanced"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="lastName" className="text-14 font-medium text-gray-900">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="form-input-enhanced"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address1" className="text-14 font-medium text-gray-900">
                    Address
                  </label>
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    required
                    value={formData.address1}
                    onChange={handleInputChange}
                    placeholder="Enter your specific address"
                    className="input-class"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="city" className="text-14 font-medium text-gray-900">
                      City
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter your city"
                      className="input-class"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="state" className="text-14 font-medium text-gray-900">
                      State
                    </label>
                    <input
                      id="state"
                      name="state"
                      type="text"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Example: NY"
                      className="input-class"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="postalCode" className="text-14 font-medium text-gray-900">
                      Postal Code
                    </label>
                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="Example: 11101"
                      className="input-class"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label htmlFor="dateOfBirth" className="text-14 font-medium text-gray-900">
                      Date of Birth
                    </label>
                    <input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="input-class"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="ssn" className="text-14 font-medium text-gray-900">
                      SSN
                    </label>
                    <input
                      id="ssn"
                      name="ssn"
                      type="text"
                      required
                      value={formData.ssn}
                      onChange={handleInputChange}
                      placeholder="Example: 1234"
                      className="input-class"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label htmlFor="email" className="text-14 font-medium text-gray-900">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="input-class"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-14 font-medium text-gray-900">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="input-class"
              />
            </div>

            <div className="flex flex-col gap-4">
                              <Button
                  type="submit"
                  disabled={isLoading}
                  className="button-primary w-full"
                >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Loading...
                  </>
                ) : (
                  type === 'sign-in' ? 'Sign In' : 'Sign Up'
                )}
              </Button>
            </div>
          </form>

          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
                ? "Don't have an account?"
                : "Already have an account?"
              }
            </p>
            <Link
              href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
              className="form-link"
            >
              {type === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Link>
          </footer>
        </>
      )}
      </section>
    </div>
  );
};

export default AuthForm; 