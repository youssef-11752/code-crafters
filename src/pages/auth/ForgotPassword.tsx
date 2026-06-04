import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiArrowLeftLine, RiMailSendLine } from 'react-icons/ri';
import { authService } from '../../services/api';
import { fadeUp, staggerContainer } from '../../utils/animations';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await authService.forgotPassword(email);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <Link to="/login" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors text-sm mb-6">
            <RiArrowLeftLine size={16} /> Back to Sign In
          </Link>
          <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-5">
            <RiMailSendLine size={24} className="text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-primary">Reset your password</h1>
          <p className="text-text-muted text-sm mt-1">
            Enter your email and we'll send reset instructions.
          </p>
        </motion.div>

        {status === 'success' ? (
          <motion.div variants={fadeUp} className="card p-8 text-center">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <RiMailSendLine size={22} className="text-green-500" />
            </div>
            <h3 className="font-bold text-primary mb-2">Check your inbox</h3>
            <p className="text-text-muted text-sm mb-5">
              We sent password reset instructions to <strong>{email}</strong>.
            </p>
            <Link to="/login" className="btn-primary justify-center">
              Return to Sign In
            </Link>
          </motion.div>
        ) : (
          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && (
              <div className="text-secondary text-sm bg-secondary/5 px-3 py-2.5 rounded-lg">
                Something went wrong. Please try again.
              </div>
            )}
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
            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center py-3.5">
              {status === 'loading' ? 'Sending...' : 'Send Reset Link'}
            </button>
          </motion.form>
        )}
      </motion.div>
    </div>
  );
}
