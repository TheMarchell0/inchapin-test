const body = document.body,
    header = document.querySelector('.js-header');

export function modalFunctional() {
    const triggerButtons = document.querySelectorAll('.js-modal-trigger'),
        modals = document.querySelectorAll('.js-modal');

    triggerButtons.forEach(triggerButton => {
        triggerButton.addEventListener('click', () => {
            const modalId = triggerButton.getAttribute('data-open-modal');
            const modal = document.querySelector(`#${modalId}`);
            openModal(modal);
        });
    });

    modals.forEach(modal => {
        const closeButtons = modal.querySelectorAll('.js-close-modal');

        closeButtons.forEach(closeButton => {
            closeButton.addEventListener('click', () => {
                closeModal(modal)
            });
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('active')) {
                closeModal(modal);
            }
        });
    });
}

function openModal(modal) {
    header.classList.add('hidden');
    modal.classList.add('active', 'modal-anim-open');
    lockScroll();
    modal.classList.remove('modal-anim-close');
}

function closeModal(modal) {
    if (modal) {
        header.classList.remove('hidden');
        modal.classList.replace('modal-anim-open', 'modal-anim-close');
        modal.addEventListener('animationend', () => {
            modal.classList.remove('active', 'modal-anim-close');
            unlockScroll();
        }, {once: true});
    }
}

function lockScroll() {
    body.classList.add('no-scroll');
}

function unlockScroll() {
    body.classList.remove('no-scroll');
}
