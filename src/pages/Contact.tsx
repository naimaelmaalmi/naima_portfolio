import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle, Activity, Zap } from 'lucide-react';
import emailjs from '@emailjs/browser';

// --- VOS CLÉS EMAILJS ---
const SERVICE_ID = 'service_0v5xzcq';
const TEMPLATE_ID = 'template_o4dyozk';
const PUBLIC_KEY = 'ySAwtpzs8qcsBUnZR';

// Contact data
const CONTACT = {
  email: 'naimaelmaalmi12@gmail.com',
  phoneNo: '+212 612 82 65 30',
  address: 'Morocco',
  social: {
    github: 'https://github.com/naimaelmaalmi',
    linkedin: 'https://www.linkedin.com/in/naima-el-maalmi-36a795288',
  },
};

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!form.current) return;

    setIsSubmitting(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          
          setIsSubmitting(false);
          setIsSubmitted(true);
          
          setFormData({ name: '', email: '', subject: '', message: '' });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSubmitting(false);
          alert('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
        }
      );
  };

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: '#00D9A3',
      status: 'Primary',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo}`,
      color: '#8AE234',
      status: 'Active',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: CONTACT.address,
      href: '#',
      color: '#C678DD',
      status: 'Global',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
      color: '#8AE234',
      stats: '50+ repos',
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
      color: '#00D9A3',
      stats: '500+ connections',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0014] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#8AE234 1px, transparent 1px),
            linear-gradient(90deg, #8AE234 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Terminal Header */}
      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1e1e1e] rounded-lg border-2 border-[#00D9A3] overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-[#00D9A3]/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-4 text-xs text-gray-400 font-mono">naima@devops:~/contact</span>
            </div>
            
            <div className="p-6 font-mono">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#8AE234]">naima@devops</span>
                  <span className="text-[#C678DD]">MINGW64</span>
                  <span className="text-[#FFA500]">~/contact</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF00]">$</span>
                  <span className="text-[#00D9A3]">netstat -an | grep LISTEN</span>
                </div>
                <div className="mt-4 text-gray-300 pl-4 border-l-2 border-[#8AE234]/30 space-y-2">
                  <p className="text-[#8AE234]">TCP 0.0.0.0:443 LISTENING ✓</p>
                  <p>
                    Communication channels <span className="text-[#00D9A3]">established</span>. 
                    Ready for <span className="text-[#FFA500]">PFE opportunities</span>!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#007acc] text-white px-4 py-2 text-xs font-mono flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>⚡ All Ports Open</span>
                <span className="text-[#8AE234]">● Response: Immediate</span>
              </div>
              <span>Ready to Connect</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="bg-[#1e1e1e] border-2 border-[#C678DD]/20 rounded-lg overflow-hidden hover:border-[#00D9A3] transition-all duration-300">
                <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#C678DD]/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Zap className="text-[#8AE234]" size={20} />
                      <span className="font-mono text-sm text-white font-bold">Message Protocol v2.0</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-[#8AE234]/20 rounded-full border border-[#8AE234]/40">
                      <div className="w-2 h-2 rounded-full bg-[#8AE234] animate-pulse"></div>
                      <span className="text-xs font-mono text-[#8AE234] font-bold">SECURE</span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6 p-4 bg-[#0a0014] rounded-lg border border-[#00D9A3]/30">
                    <div className="font-mono text-xs text-[#00D9A3] mb-1">$ Initialize secure connection...</div>
                    <div className="font-mono text-xs text-gray-400">
                      <span className="text-[#8AE234]">→</span> Encryption: AES-256 | 
                      <span className="text-[#C678DD]"> Protocol: </span>HTTPS/TLS 1.3
                    </div>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="relative w-24 h-24 mx-auto mb-6">
                        <div className="absolute inset-0 bg-[#8AE234]/20 rounded-full animate-ping"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-br from-[#8AE234] to-[#00D9A3] rounded-full flex items-center justify-center">
                          <CheckCircle size={48} className="text-[#0a0014]" />
                        </div>
                      </div>
                      <h3 className="font-mono text-3xl font-bold text-[#8AE234] mb-4">
                        Transmission Complete!
                      </h3>
                      <div className="space-y-2 font-mono text-sm text-gray-400">
                        <p><span className="text-[#00D9A3]">✓</span> Message encrypted and delivered</p>
                        <p><span className="text-[#00D9A3]">✓</span> Response expected within 24h</p>
                        <p><span className="text-[#00D9A3]">✓</span> Connection secured</p>
                      </div>
                    </motion.div>
                  ) : (
                    <form 
                      ref={form} 
                      onSubmit={handleSubmit} 
                      className="space-y-5"
                    >
                      {/* Name Field */}
                      <div>
                        <label className="flex items-center gap-2 font-mono text-xs text-gray-400 mb-2">
                          <span className="text-[#00D9A3]">$</span>
                          <span>SENDER_NAME <span className="text-[#ff5f56]">[required]</span></span>
                        </label>
                        <input
                          type="text"
                          name="from_name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`w-full bg-[#0a0014] border ${
                            errors.name ? 'border-[#ff5f56]' : 'border-[#C678DD]/30'
                          } rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-[#8AE234] focus:shadow-[0_0_15px_rgba(138,226,52,0.2)] transition-all`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-[#ff5f56] text-xs mt-2 font-mono flex items-center gap-1">
                            <span>⚠</span> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="flex items-center gap-2 font-mono text-xs text-gray-400 mb-2">
                          <span className="text-[#00D9A3]">$</span>
                          <span>SENDER_EMAIL <span className="text-[#ff5f56]">[required]</span></span>
                        </label>
                        <input
                          type="email"
                          name="from_email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`w-full bg-[#0a0014] border ${
                            errors.email ? 'border-[#ff5f56]' : 'border-[#C678DD]/30'
                          } rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-[#8AE234] focus:shadow-[0_0_15px_rgba(138,226,52,0.2)] transition-all`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-[#ff5f56] text-xs mt-2 font-mono flex items-center gap-1">
                            <span>⚠</span> {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label className="flex items-center gap-2 font-mono text-xs text-gray-400 mb-2">
                          <span className="text-[#00D9A3]">$</span>
                          <span>MESSAGE_SUBJECT <span className="text-[#ff5f56]">[required]</span></span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={(e) => handleChange('subject', e.target.value)}
                          className={`w-full bg-[#0a0014] border ${
                            errors.subject ? 'border-[#ff5f56]' : 'border-[#C678DD]/30'
                          } rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-[#8AE234] focus:shadow-[0_0_15px_rgba(138,226,52,0.2)] transition-all`}
                          placeholder="PFE Internship / Project inquiry"
                        />
                        {errors.subject && (
                          <p className="text-[#ff5f56] text-xs mt-2 font-mono flex items-center gap-1">
                            <span>⚠</span> {errors.subject}
                          </p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="flex items-center gap-2 font-mono text-xs text-gray-400 mb-2">
                          <span className="text-[#00D9A3]">$</span>
                          <span>MESSAGE_BODY <span className="text-[#ff5f56]">[required, min: 10 chars]</span></span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          rows={6}
                          className={`w-full bg-[#0a0014] border ${
                            errors.message ? 'border-[#ff5f56]' : 'border-[#C678DD]/30'
                          } rounded-lg px-4 py-3 text-white placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-[#8AE234] focus:shadow-[0_0_15px_rgba(138,226,52,0.2)] transition-all resize-none`}
                          placeholder="Hello Naima,&#10;&#10;I'm reaching out regarding..."
                        />
                        {errors.message && (
                          <p className="text-[#ff5f56] text-xs mt-2 font-mono flex items-center gap-1">
                            <span>⚠</span> {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 px-6 rounded-lg font-mono font-bold text-base transition-all duration-300 ${
                          isSubmitting
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-[#8AE234] to-[#00D9A3] text-[#0a0014] hover:shadow-[0_0_30px_rgba(138,226,52,0.6)] hover:scale-[1.02]'
                        }`}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-3">
                            <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                            <span>ENCRYPTING & SENDING...</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-3">
                            <Send size={18} />
                            <span>TRANSMIT MESSAGE</span>
                            <span className="text-xs">→</span>
                          </div>
                        )}
                      </button>
                    </form>
                  )}
                </div>

                <div className="bg-[#0a0014] px-6 py-3 border-t border-[#C678DD]/20 font-mono text-xs flex items-center justify-between text-gray-500">
                  <span><span className="text-[#8AE234]">PROTOCOL:</span> Secure HTTPS</span>
                  <span><span className="text-[#00D9A3]">STATUS:</span> Encrypted</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Contact Methods */}
              <div className="bg-[#1e1e1e] border-2 border-[#C678DD]/20 rounded-lg overflow-hidden">
                <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#C678DD]/20">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-sm font-semibold text-white">
                      Connection Channels
                    </h3>
                    <span className="px-2 py-1 bg-[#8AE234]/20 text-[#8AE234] text-xs font-mono rounded">
                      {contactMethods.length} AVAILABLE
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  {contactMethods.map((method) => {
  const IconComponent = method.icon;
  return (
    <a
      key={method.label}
      href={method.href}
      className="block p-4 bg-[#0a0014] rounded-lg border border-[#C678DD]/20 hover:border-[#8AE234] hover:shadow-[0_0_20px_rgba(138,226,52,0.3)] transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="p-2.5 rounded-lg"
            style={{ backgroundColor: `${method.color}20` }}
          >
            <IconComponent size={20} style={{ color: method.color }} />
          </div>
          <div>
            <div className="font-mono text-sm text-white font-bold">{method.label}</div>
            <div className="text-xs text-gray-400 font-mono">{method.status}</div>
          </div>
        </div>
        <div 
          className="w-2 h-2 rounded-full animate-pulse" 
          style={{ backgroundColor: method.color }}
        ></div>
      </div>
      <div className="text-xs text-gray-400 font-mono bg-[#1e1e1e] p-2 rounded border border-[#C678DD]/10">
        {method.value}
      </div>
    </a>
  );
})}

                </div>
              </div>

              {/* Availability */}
              <div className="bg-[#1e1e1e] border-2 border-[#C678DD]/20 rounded-lg overflow-hidden">
                <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#C678DD]/20">
                  <div className="flex items-center gap-3">
                    <Activity className="text-[#8AE234]" size={18} />
                    <h3 className="font-mono text-sm font-semibold text-white">
                      Status Monitor
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-r from-[#8AE234]/20 to-[#00D9A3]/20 p-4 rounded-lg border border-[#8AE234]/40 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      <span className="font-mono text-sm text-[#8AE234] font-bold">AVAILABLE NOW</span>
                    </div>
                    <p className="text-xs font-mono text-gray-400">Open for PFE internships & freelance work</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#0a0014] p-3 rounded-lg border border-[#C678DD]/20">
                      <div className="text-xs text-gray-400 font-mono mb-1">Response</div>
                      <div className="text-sm font-bold font-mono text-[#00D9A3]">&lt; 24h</div>
                    </div>
                    <div className="bg-[#0a0014] p-3 rounded-lg border border-[#C678DD]/20">
                      <div className="text-xs text-gray-400 font-mono mb-1">Timezone</div>
                      <div className="text-sm font-bold font-mono text-[#C678DD]">GMT+1</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1e1e1e] to-[#2d2d2d] border-2 border-[#8AE234] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(138,226,52,0.3)]"
          >
            <div className="p-10 text-center">
  <div className="w-16 h-16 bg-gradient-to-br from-[#8AE234] to-[#00D9A3] rounded-full flex items-center justify-center mx-auto mb-6">
    <Mail size={32} className="text-[#0a0014]" />
  </div>
  <h3 className="font-mono text-2xl font-bold text-white mb-3">
    Do you have a <span className="text-[#8AE234]">PFE Internship offer</span>?
  </h3>
  <p className="text-gray-400 font-mono text-sm mb-6 max-w-md mx-auto">
    I am actively looking for a final-studies internship in DevOps/Full Stack. 
    If you have an opportunity or a contact to share, <span className="text-[#00D9A3]">feel free to reach out</span>!
  </p>
  <div className="inline-block px-6 py-2 bg-[#8AE234]/20 rounded-full border border-[#8AE234]/40">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-pulse"></div>
      <span className="font-mono text-xs text-[#8AE234] font-bold">AVAILABLE FOR PFE INTERNSHIP</span>
    </div>
  </div>
</div>


            <div className="bg-[#007acc] px-6 py-3 text-xs font-mono flex items-center justify-center text-white">
              <span className="text-[#8AE234]">●</span>
              <span className="mx-2">SECURE CONNECTION ACTIVE</span>
              <span>•</span>
              <span className="ml-2">All messages encrypted</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};