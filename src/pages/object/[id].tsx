import { useRouter } from "next/router";

function Object(): JSX.Element {
    const router = useRouter();
    const { id, q, asPath, pathname } = router.query;

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