import { Metadata } from 'next';
import BookingPage from './BookingPage';

export const metadata: Metadata = {
    title: 'Book Appointment | Dr. Sarah Mitchell',
    description: 'Schedule your therapy appointment with Dr. Sarah Mitchell. Book a free 15-minute consultation or full therapy session online.',
};

export default function Booking() {
    return <BookingPage />;
}
