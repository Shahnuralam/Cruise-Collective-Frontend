import React from 'react';
import renderer from 'react-test-renderer';
import CruiseLineCardDetail from '../../pages/cruise-line-card-detail/[slug]';

jest.mock('../../pages/cruise-line-card-detail/[slug]', () => {
    return {
        __esModule: true,
        default: jest.fn(),
    };
});

// Mock the useSession hook
jest.mock('next-auth/react', () => ({
    useSession: jest.fn(),
}));

describe('CruiseLineCardDetail component', () => {
    it('matches the snapshot', () => {
        // Mock session data
        const mockSession = {
            data: {
                user: {
                    email: 'test@example.com',
                },
            },
        };
        require('next-auth/react').useSession.mockReturnValue(mockSession);

        // Mock offer data
        const mockOffer = {
            attributes: {
                title: 'Mocked Title',
                nights: 7,
                season: {
                    data: {
                        attributes: {
                            title: 'Summer',
                        },
                    },
                },
                expiry_date: '2023-12-31',
                interests: {
                    data: [
                        {
                            attributes: {
                                title: 'Beach',
                            },
                        },
                        {
                            attributes: {
                                title: 'Adventure',
                            },
                        },
                    ],
                },
                featured_image: {
                    data: [
                        {
                            attributes: {
                                url: 'mocked-image-url.jpg',
                            },
                        },
                    ],
                },
                cruise_line: {
                    data: {
                        attributes: {
                            logo: {
                                data: {
                                    attributes: {
                                        url: 'mocked-logo-url.jpg',
                                    },
                                },
                            },
                        },
                    },
                },
                departure: {
                    data: {
                        attributes: {
                            title: 'Miami',
                        },
                    },
                },
                departure_date: '2023-06-01',
                destinations: {
                    data: [
                        {
                            attributes: {
                                title: 'Caribbean',
                                type: 'place',
                            },
                        },
                        {
                            attributes: {
                                title: 'Bahamas',
                                type: 'place',
                            },
                        },
                    ],
                },
                offer_price: 1200,
                editors_choice: true,
                new_world_cruise: false,
                recommended: true,
                coupon: 'COUPON123',
                seo: {
                    // Add relevant SEO data
                },
            },
        };

        // Create a snapshot for CruiseLineCardDetail component
        const tree = renderer.create(<CruiseLineCardDetail offer={mockOffer} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
