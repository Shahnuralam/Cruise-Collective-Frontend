import React from 'react';
import renderer from 'react-test-renderer';
import OfferCard from '../../components/Card/OfferCard';
import { useSession } from 'next-auth/react';

jest.mock('next-auth/react', () => ({
    useSession: jest.fn(),
}));

describe('OfferCard Component', () => {
    test('renders correctly', () => {
        // Mock the necessary dependencies or provide any required context
        const mockUseSession = {
            data: { user: { email: 'test@example.com' } },
        };
        (useSession as jest.Mock).mockReturnValue(mockUseSession);

        const offer = {
            id: 1,
            attributes: {
                slug: 'special-offer-slug',
                nights: 7,
                price: 1000,
                offer_price: 800,
                expiry_date: '2023-12-31', // Provide a valid expiry date
                title: 'Special Offer',
                departure_date: '2023-01-01', // Provide a valid departure date
                Saving: '45% Off', // Provide a valid departure date
                departure: {
                    data: {
                        attributes: {
                            title: 'Departure Port',
                        },
                    },
                },
                destinations: {
                    data: [
                        {
                            id: 1,
                            attributes: {
                                title: 'Destination 1',
                                type: 'place',
                            },
                        },
                        {
                            id: 2,
                            attributes: {
                                title: 'Destination 2',
                                type: 'place',
                            },
                        },
                    ],
                },
            },
        };

        const component = renderer.create(
            <OfferCard
                offer={offer}
                termsAndConditionsModalData={null}
                setTermsAndConditionsModalData={() => { }}
                setOpenLoginModal={() => { }}
                source="special_offer"
            />
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});