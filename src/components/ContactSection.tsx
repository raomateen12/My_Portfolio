import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, Clock, MessageSquare, X } from 'lucide-react';

const contactInfo = [
	{
		icon: Mail,
		label: 'Email',
		value: 'raomateen2851@gmail.com',
		link: 'mailto:raomateen2851@gmail.com',
		color: 'neon-blue'
	},
	{
		icon: Phone,
		label: 'Phone',
		value: '+92 309 744 3097',
		link: 'tel:+923097443097',
		color: 'neon-green'
	},
	{
		icon: Linkedin,
		label: 'LinkedIn',
		value: 'mateen-ahmad-saeed-8a0574252',
		link: 'https://linkedin.com/in/mateen-ahmad-saeed-8a0574252',
		color: 'neon-purple'
	},
	{
		icon: Github,
		label: 'GitHub',
		value: 'raomateen12',
		link: 'https://github.com/raomateen12',
		color: 'neon-pink'
	}
];

const ContactSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [notification, setNotification] = useState<{type: 'success' | 'error' | null, message: string}>({type: null, message: ''});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const showNotification = (type: 'success' | 'error', message: string) => {
	setNotification({ type, message });
	setTimeout(() => setNotification({type: null, message: ''}), 5000);
};

const handleSubmit = async (e: React.FormEvent) => {
	e.preventDefault();
	setIsSubmitting(true);
	
	try {
		const response = await fetch('http://localhost:5000/api/contact', {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: formData.name.trim(),
				email: formData.email.trim(),
				subject: formData.subject.trim(),
				message: formData.message.trim()
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || 'Something went wrong');
		}

		// Clear form and show success message
		setFormData({ name: '', email: '', subject: '', message: '' });
		showNotification('success', 'Message sent successfully! We\'ll get back to you soon.');
	} catch (error) {
		console.error('Error submitting form:', error);
		showNotification('error', error instanceof Error ? error.message : 'Failed to send message. Please try again.');
	} finally {
		setIsSubmitting(false);
	}
	};

	return (
		<section id="contact" ref={ref} className="min-h-screen py-20 relative">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
						Let's Work Together
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						Ready to bring your ideas to life? Let's discuss how I can help you build amazing digital solutions.
					</p>
				</motion.div>

				<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
							<p className="text-muted-foreground leading-relaxed mb-8">
								I'm always excited to work on new projects and collaborate with amazing people. 
								Whether you have a specific project in mind or just want to chat about technology, 
								feel free to reach out!
							</p>
						</div>

						{/* Contact methods */}
						<div className="space-y-6">
							{contactInfo.map((contact, index) => {
								const Icon = contact.icon;
								return (
									<motion.a
										key={contact.label}
										href={contact.link}
										target={contact.link.startsWith('http') ? '_blank' : undefined}
										rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
										initial={{ opacity: 0, x: -30 }}
										animate={isInView ? { opacity: 1, x: 0 } : {}}
										transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
										className="flex items-center space-x-4 p-4 bg-card border border-border/50 rounded-xl hover:border-primary/50 transition-all duration-300 group"
										whileHover={{ x: 10, scale: 1.02 }}
									>
										<motion.div
											className={`w-12 h-12 rounded-lg bg-${contact.color}/20 flex items-center justify-center`}
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.5 }}
										>
											<Icon className={`w-6 h-6 text-${contact.color}`} />
										</motion.div>
										<div>
											<div className="text-sm text-muted-foreground">{contact.label}</div>
											<div className="text-foreground font-medium group-hover:text-primary transition-colors">
												{contact.value}
											</div>
										</div>
									</motion.a>
								);
							})}
						</div>

						{/* Additional info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="p-6 bg-card/50 border border-border/50 rounded-xl backdrop-blur-sm"
						>
							<div className="flex items-center space-x-3 mb-4">
								<Clock className="w-5 h-5 text-primary" />
								<span className="font-semibold text-foreground">Availability</span>
							</div>
							<p className="text-muted-foreground text-sm leading-relaxed">
								I'm available for freelance work and full-time opportunities. 
								I typically respond to messages within 24 hours.
							</p>
							<div className="mt-4 flex items-center space-x-3">
								<MapPin className="w-4 h-4 text-accent" />
								<span className="text-sm text-muted-foreground">Based in Pakistan (PKT UTC+5)</span>
							</div>
						</motion.div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="bg-card border border-border/50 rounded-2xl p-8"
					>
						<div className="flex items-center space-x-3 mb-6">
							<MessageSquare className="w-6 h-6 text-primary" />
							<h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
						</div>

						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Name field */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.7, duration: 0.6 }}
								className="relative"
							>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
									placeholder="Your Name"
									required
								/>
								<label className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-secondary px-2 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
									Your Name
								</label>
							</motion.div>

							{/* Email field */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.8, duration: 0.6 }}
								className="relative"
							>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
									placeholder="Your Email"
									required
								/>
								<label className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-secondary px-2 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
									Your Email
								</label>
							</motion.div>

							{/* Subject field */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.9, duration: 0.6 }}
								className="relative"
							>
								<input
									type="text"
									name="subject"
									value={formData.subject}
									onChange={handleInputChange}
									className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
									placeholder="Subject"
									required
								/>
								<label className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-secondary px-2 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
									Subject
								</label>
							</motion.div>

							{/* Message field */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 1.0, duration: 0.6 }}
								className="relative"
							>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleInputChange}
									rows={5}
									className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder-transparent peer focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
									placeholder="Your Message"
									required
								/>
								<label className="absolute left-4 -top-2.5 text-sm text-muted-foreground bg-secondary px-2 transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary">
									Your Message
								</label>
							</motion.div>

							{/* Submit button */}
							<motion.button
								type="submit"
								disabled={isSubmitting}
								initial={{ opacity: 0, y: 20 }}
								animate={isInView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 1.1, duration: 0.6 }}
								className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
								whileHover={{ scale: 1.02 }}
							>
								{isSubmitting ? (
									<>
										<motion.div
											animate={{
												scale: [1, 1.2, 1],
												rotate: [0, 360],
												transition: { duration: 1, repeat: Infinity, ease: "linear" }
											}}
										>
											<Send className="w-5 h-5" />
										</motion.div>
										<span>Sending...</span>
									</>
								) : (
									<>
										<Send className="w-5 h-5" />
										<span>Send Message</span>
									</>
								)}
							</motion.button>
						</form>

						{/* Notification */}
						<AnimatePresence>
							{notification.type && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									className={`fixed bottom-6 right-6 p-4 rounded-lg shadow-lg z-50 backdrop-blur-sm ${
										notification.type === 'success' 
										? 'bg-primary/20 text-primary-foreground border border-primary/30' 
										: 'bg-destructive/20 text-destructive-foreground border border-destructive/30'
									} flex items-center space-x-3 shadow-[0_0_15px] shadow-primary/20`}
								>
									<span>{notification.message}</span>
									<button 
										onClick={() => setNotification({type: null, message: ''})}
										className="p-1 hover:bg-foreground/10 rounded-full transition-colors"
									>
										<X className="w-4 h-4" />
									</button>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;