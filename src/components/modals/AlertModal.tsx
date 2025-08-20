"use client";

import BaseModal from './BaseModal';
import { RiCloseLargeLine } from "react-icons/ri";
import { IoCheckboxSharp } from "react-icons/io5";
import { TbAlertSquare } from "react-icons/tb";
import { AlertModalProps } from '@/types/ui';

export default function AlertModal({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  type = 'success',
  actions = [],
  showCloseButton = true 
}: AlertModalProps) {
  const typeStyles = {
    success: {
      bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
      border: 'border-green-200/50',
      titleColor: 'text-green-900',
      messageColor: 'text-green-700',
      iconColor: 'text-green-600',
      closeColor: 'text-green-600 hover:text-green-800',
      icon: IoCheckboxSharp,
      shadow: 'shadow-green-200/20'
    },
    error: {
      bg: 'bg-beige',
      border: 'border-red-200/50',
      titleColor: 'text-red-900',
      messageColor: 'text-red-700',
      iconColor: 'text-red-600',
      closeColor: 'text-red-600 hover:text-red-800',
      icon: TbAlertSquare,
      shadow: 'shadow-red-200/20'
    }
  };

  const styles = typeStyles[type];
  const Icon = styles.icon;

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} size="sm">
      <div className={`
        ${styles.bg} 
        ${styles.border} 
        border-2 
        rounded-sm
        shadow-2xl 
        ${styles.shadow}
        overflow-hidden
        relative
      `}>
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
          <div className={`w-12 h-12 ${type === 'success' ? 'bg-green-400' : 'bg-red-400'} transform rotate-12 absolute top-2 right-2`} />
          <div className={`w-8 h-8 ${type === 'success' ? 'bg-emerald-300' : 'bg-orange-300'} transform -rotate-12 absolute top-6 right-6`} />
        </div>

        <div className="relative p-8">
          {/* Close button */}
          {showCloseButton && (
            <button
              onClick={onClose}
              className={`
                absolute top-4 right-4 p-2 rounded-full transition-colors
                ${styles.closeColor}
                hover:bg-current/10
              `}
            >
              <RiCloseLargeLine size={20} />
            </button>
          )}

          {/* Icon and Title */}
          <div className="text-center mb-6">
            <div className={`inline-flex p-3 ${styles.iconColor} mb-4`}>
              <Icon size={32} />
            </div>
            <h2 className={`text-xl font-semibold ${styles.titleColor} mb-2`}>
              {title}
            </h2>
            <p className={`${styles.messageColor} leading-relaxed`}>
              {message}
            </p>
          </div>

          {/* Actions */}
          {actions.length > 0 && (
            <div className="flex gap-3 justify-center">
              {actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.onClick}
                  className={`
                    px-6 py-2.5 rounded-lg font-medium transition-colors
                    ${action.variant === 'primary' 
                      ? type === 'success'
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }
                  `}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </BaseModal>
  );
}