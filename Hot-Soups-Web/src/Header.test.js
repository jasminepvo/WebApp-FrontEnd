import {screen, render, cleanup} from '@testing-library/react';
import Header from './Components/Header.js';

test('header will display Hot Soup test logo and links to other pages', () => {
    render(<Header/>);
    const linkElement = screen.getByText(/HotSoup/i);
    expect(linkElement).toBeInTheDocument();
})

    let header_content = [
        {
            title: "About",
            link: "/#About",
        },
        {
            title: "Contributors",
            link: "/#Contributors",
        },
        {
            title: "Follow Us",
            link: "/#Socials",
        }
    ]
    header_content.map((content) => {
        test(`${content.title} contains ${content.link}`, () => {
            render(<Header/>);
            expect(screen.getByText(content.title).closest('a')).toHaveAttribute('href', content.link);
        })
    })
