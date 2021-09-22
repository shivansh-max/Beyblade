import React from 'react';
import AmazonLogo
	from '../../../../Assets/Logos/amazon-logo.png';
import WalmartLogo
	from '../../../../Assets/Logos/walmart-logo.png';
import HasbroLogo
	from '../../../../Assets/Logos/hasbro-logo.png';
import TargetLogo
	from '../../../../Assets/Logos/target-logo.png';
import EbayLogo from '../../../../Assets/Logos/ebay-logo.png';
import Link from './Link';

function Shopping(props) {
	return (
		<div className="shopping">
			<div className="center">
				<h2>Shopping</h2>
			</div>
			<ul>
				<Link srcImg={AmazonLogo} link={"https://www.amazon.com/"}/>
				<Link srcImg={WalmartLogo} link={"https://www.walmart.com/"}/>
				<Link srcImg={HasbroLogo} link={"https://shop.hasbro.com/en-us"}/>
				<Link srcImg={TargetLogo} link={"https://www.target.com/"}/>
				<Link srcImg={EbayLogo} link={"https://www.ebay.com/"}/>
			</ul>
		</div>
	);
}

export default Shopping;