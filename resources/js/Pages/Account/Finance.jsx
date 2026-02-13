import AccountLayout from '../../Layouts/AccountLayout';

export default function Finance() {
    return (
        <div>
            <h1>Finance</h1>
        </div>
    );
}

Finance.layout = (page) => <AccountLayout title="Financial Records">{page}</AccountLayout>;
