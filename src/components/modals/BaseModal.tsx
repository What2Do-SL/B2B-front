"use client";

import { useEffect } from 'react';
import { BaseModalProps } from '@/types/ui';

export default function BaseModal({ 
  isOpen, 
  onClose, 
  children, 
  size = 'md',
  showOverlay = true 
}: BaseModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses: Record<string, string> = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      {showOverlay && (
        <div 
          className="absolute inset-0 bg-black/60 backdrop-brightness-75"
          onClick={onClose}
        />
      )}
      
      {/* Modal Container */}
      <div className={`relative w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden`}>
        {children}
      </div>
    </div>
  );
}