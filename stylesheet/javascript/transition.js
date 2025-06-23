// ページ遷移トランジションのJavaScript
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('ul li a');
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.classList.add('current-page-link');
        } else {
            link.classList.remove('current-page-link');
        }
    });

    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        // 同じページへの内部リンク（例: home.html -> home.html や #contact）
        // 別ページへの内部リンク（例: home.html -> about.html）
        // 外部ページへのリンク（例: home.html -> https://example.com）
        link.addEventListener('click', (event) => {
            const currentURL = window.location.origin + window.location.pathname;
            const targetURL = link.href;
            const isExternal = link.hostname !== window.location.hostname;
            const isInternalSamePage = (targetURL.split('#')[0] === currentURL);

            // 1. 外部ページリンク
            if (isExternal) {
                return;
            }

            // 2. 同ページリンク（#ハッシュリンク含む）
            if (isInternalSamePage) {
                event.preventDefault(); // デフォルト遷移キャンセル⇒スクロール制御

                if (link.hash) {
                    const targetElement = document.querySelector(link.hash);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    // ハッシュなし
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                return;
            }

            // 3. 異なる内部ページリンク（フェードアウト⇒フェードイン）
            event.preventDefault(); //デフォルト遷移キャンセル
            document.body.classList.add('fade-out-page');
            const transitionDuration = parseFloat(getComputedStyle(document.body).transitionDuration) * 1000;
            setTimeout(() => {
                window.location.href = link.href;
            }, transitionDuration);
        });        
    });
});