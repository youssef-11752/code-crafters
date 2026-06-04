import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiEyeLine, RiEyeOffLine, RiErrorWarningLine, RiCheckLine } from 'react-icons/ri';
import { useAuth } from '../../context/AuthContext';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [formError, setFormError] = useState('');
  const { register, isLoading, error, clearError } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    clearError();
    setFormError('');
    if (password !== confirm) { setFormError('Passwords do not match.'); return; }
    if (password.length < 8) { setFormError('Password must be at least 8 characters.'); return; }
    try {
      await register(name, email, password);
      navigate('/dashboard');
    } catch { /* handled in context */ }
  };

  const strength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3;
  const strengthColors = ['', 'bg-red-400', 'bg-amber-400', 'bg-green-400'];
  const strengthLabels = ['', 'Weak', 'Fair', 'Strong'];

  return (
    <div className="min-h-screen bg-bg flex">
      <div className="hidden lg:flex lg:w-1/2 bg-primary-gradient items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">CC</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Join Code Crafters</h2>
          <p className="text-white/60 text-base max-w-xs">
            Get access to your client portal, project tracking, and direct communication with our team.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <Link to="/" className="flex items-center gap-2 mb-8 lg:hidden">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">CC</span>
              </div>
              <span className="font-bold text-primary">Code Crafters</span>
            </Link>
            <h1 className="text-2xl font-bold text-primary">Create your account</h1>
            <p className="text-text-muted text-sm mt-1">
              Already have one?{' '}
              <Link to="/login" className="text-secondary font-semibold hover:underline">Sign in</Link>
            </p>
          </motion.div>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-4">
            {(error || formError) && (
              <div className="flex items-center gap-2 bg-secondary/5 border border-secondary/20 text-secondary text-sm px-3 py-2.5 rounded-lg">
                <RiErrorWarningLine size={16} /> {formError || error}
              </div>
            )}

            <div>
              <label className="label">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div>
              <label className="label">Email Address</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field"
              />
            </div>

            <div>
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={showPwd ? 'text' : 'password'}
                  placeholder="Min. 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="input-field pr-10"
                />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark">
                  {showPwd ? <RiEyeOffLine size={16} /> : <RiEyeLine size={16} />}
                </button>
              </div>
              {password && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex gap-1 flex-1">
                    {[1, 2, 3].map((l) => (
                      <div key={l} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${strength >= l ? strengthColors[strength] : 'bg-gray-200'}`} />
                    ))}
                  </div>
                  <span className="text-xs text-text-muted">{strengthLabels[strength]}</span>
                </div>
              )}
            </div>

            <div>
              <label className="label">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Repeat password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  className="input-field pr-10"
                />
                {confirm && password === confirm && (
                  <RiCheckLine size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500" />
                )}
              </div>
            </div>

            <button type="submit" disabled={isLoading} className="btn-primary w-full justify-center py-3.5 mt-2">
              {isLoading ? 'Creating account...' : 'Create Account'}
            </button>

            <p className="text-xs text-text-muted text-center">
              By registering you agree to our{' '}
              <a href="#" className="text-secondary hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-secondary hover:underline">Privacy Policy</a>.
            </p>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}
