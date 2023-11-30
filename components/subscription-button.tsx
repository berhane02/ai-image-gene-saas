import axios from "axios";

interface SubscriptionButtonProps {
    isPro: boolean;
};

export const SubscriptionButton = (
    {
        isPro = false
    }: SubscriptionButtonProps = ({
        const onClick = async () => {
            try {
                const response = await axios.get("/api/stripe");
            } catch (error) {
                console.log("BILLING_ERROR", Error)
            }
        }
    })
)