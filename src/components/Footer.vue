<template>
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; {{ new Date().getFullYear() }} Kalpesh Chavan. All rights reserved.</p>
            <div class="footer-links">
                <a href="https://github.com/KelpFriesOG" target="_blank" rel="noopener">GitHub</a>
                <a href="mailto:kelpfutura@gmail.com">Email</a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .footer {
    padding: 1rem;
    background-color: var(--bg-color);
    color: var(--text-color);
    text-align: center;
    border-top: 1px solid var(--accent-color);
    margin-top: auto;
    }

    .footer-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    }

    .footer-links {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    }

    .footer-links a {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 500;
    }

    .footer-links a:hover {
    text-decoration: underline;
    }
</style>