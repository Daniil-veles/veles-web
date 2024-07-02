import { useRouter } from "next/router";

function Object(): JSX.Element {
    const router = useRouter();
    const { id, q } = router.query;
    const { asPath, pathname } = router;

    console.log(asPath, pathname);

    return (
        <div>
            Номер объекта {id}
            <br />
            Ссылка {q}
        </div>
    );
}

export default Object;