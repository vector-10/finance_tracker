'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      ...((!isLogin) && { name: formData.get('name') as string })
    };

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      
      if (result.success) {
        localStorage.setItem('userId', result.userId);
        router.push('/dashboard');
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background illustrations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-300/25 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-emerald-300/30 rounded-full blur-xl"></div>
        
        {/* Money/Finance icons as background */}
        <div className="absolute top-1/4 left-1/4 text-green-200/20 text-4xl">💰</div>
        <div className="absolute top-1/3 right-1/3 text-emerald-200/20 text-3xl">📊</div>
        <div className="absolute bottom-1/3 left-1/5 text-green-200/20 text-3xl">💳</div>
        <div className="absolute bottom-1/4 right-1/4 text-emerald-200/20 text-4xl">📈</div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl">💳</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Welcome to SpenTrack</h2>
            <p className="mt-2 text-gray-600">
              {isLogin ? 'Sign in to your account' : 'Create your account'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!isLogin && (
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50 backdrop-blur-sm placeholder:text-gray-600"
                  placeholder="Full Name"
                />
              )}
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50 backdrop-blur-sm placeholder:text-gray-600"
                placeholder="Email"
              />
              <input
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xs focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/50 backdrop-blur-sm placeholder:text-gray-600"
                placeholder="Password"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 py-2 px-4 rounded-md border border-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xs disabled:opacity-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {loading ? 'Loading...' : (isLogin ? 'Sign In' : 'Sign Up')}
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-green-600 hover:text-green-500 font-medium transition-colors duration-200"
              >
                {isLogin ? "Don't have an account? Register" : "Already have an account? Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}