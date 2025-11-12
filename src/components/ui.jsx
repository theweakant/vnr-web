import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

// --- Helper Function ---
export const cn = (...classes) => classes.filter(Boolean).join(' ');

// --- Button Component ---
export const Button = forwardRef(
  ({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500',
      secondary:
        'bg-slate-200 hover:bg-slate-300 text-slate-900 focus:ring-slate-500',
      accent:
        'bg-teal-400 hover:bg-teal-500 text-slate-900 font-semibold focus:ring-teal-400',
      outline:
        'border-2 border-blue-600 hover:bg-blue-50 text-blue-600 focus:ring-blue-500',
      ghost: 'hover:bg-slate-100 text-slate-700 focus:ring-slate-400',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = 'Button';

// --- Card Components ---
export const Card = forwardRef(({ className, ...props }, ref) => (
  <motion.div
    ref={ref}
    className={cn(
      'rounded-xl border border-slate-200 bg-white text-slate-900 shadow-md hover:shadow-lg transition-shadow',
      className
    )}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true, margin: '100px' }}
    {...props}
  />
));
Card.displayName = 'Card';

export const CardHeader = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

export const CardContent = forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardTitle = forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-xl font-bold leading-tight tracking-tight text-slate-900', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef(({ className, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-slate-600', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

// --- Input Component ---
export const Input = forwardRef(({ className, type = 'text', ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      'flex h-10 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all',
      className
    )}
    {...props}
  />
));
Input.displayName = 'Input';

// --- Container Component ---
export const Container = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    {...props}
  />
));
Container.displayName = 'Container';

// --- Section Component ---
export const Section = forwardRef(
  ({ className, title, subtitle, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('py-12 md:py-16 lg:py-20', className)}
      {...props}
    >
      <Container>
        {(title || subtitle) && (
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            {title && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>}
            {subtitle && <p className="text-lg text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </Container>
    </section>
  )
);
Section.displayName = 'Section';

