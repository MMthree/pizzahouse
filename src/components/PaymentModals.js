import React, { useContext } from 'react';
import { Button, Modal } from 'reactstrap';

import { YourStoreContext } from "../context/YourStoreContext";

const PaymentModals = ({ toggle, modal, paymentType }) => {

    const { store } = useContext(YourStoreContext);

    const GIFTCARD = <Modal className="py-3 px-4" isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 700 }}
                        toggle={toggle} >
                        <div className="py-4 px-3 text-center">
                            <h5 className="mb-3">Your gift card did not have sufficient funds to complete this order</h5>
                            <div className="col-6 py-2 mx-auto">
                                <Button className="btn-block" color="danger" onClick={toggle}>TRY AGAIN</Button>
                            </div>
                        </div>
                    </Modal>;

    const ORDERSUCCESS = <Modal className="py-3 px-4" isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 700 }}
                            toggle={toggle} >
                                <div className="py-4 px-3 text-center">
                                    <h1 className="mb-3"><i className="text-success far fa-check-circle"></i></h1>
                                    <h5 className="mb-4">Your order will be ready in 15-30 minutes at the following store:</h5>
                                    <h6>{store.full}</h6>
                                    
                                    <div className="col-6 py-2 mx-auto">
                                        <Button className="btn-block" color="danger" onClick={toggle}>CLOSE</Button>
                                    </div>  
                                </div>
                        </Modal>


    const modalSelect = type => {

        if (type === "gift") {
            return GIFTCARD
        }
        if (type === "store" || type === "credit") {
            return ORDERSUCCESS
        }
    }

    return (
        <div>
            {modalSelect(paymentType)}
        </div>
    )
}

export default PaymentModals;
