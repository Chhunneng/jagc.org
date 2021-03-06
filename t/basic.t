use Mojo::Base -strict;

use Test::More;
use Test::Mojo;

BEGIN { $ENV{MOJO_MODE} = 'test' }

my $t = Test::Mojo->new('JAGC')->tap(
  sub {
    $_->ua->max_connections(0);
    $_->app->db->command({dropDatabase => 1});
  }
);

$t->get_ok('/')->status_is(200)->text_is('html head title' => 'JAGC')
  ->text_is('div.navbar-collapse ul.navbar-nav li:nth-child(1) > a' => 'Tasks')
  ->text_is('div.navbar-collapse ul.navbar-nav li:nth-child(2) > a' => 'Contests')
  ->text_is('div.navbar-collapse ul.navbar-nav li:nth-child(3) > a' => 'Events')
  ->text_is('div.navbar-collapse ul.navbar-nav li:nth-child(4) > a' => 'About')
  ->text_is('ul.dropdown-menu li:nth-child(3) > a'                  => 'GitHub')
  ->text_is('ul.dropdown-menu li:nth-child(4) > a'                  => 'Twitter')
  ->text_is('ul.dropdown-menu li:nth-child(5) > a'                  => 'VK')
  ->text_is('ul.dropdown-menu li:nth-child(6) > a'                  => 'LinkedIn')
  ->text_is('ul.dropdown-menu li:nth-child(7) > a'                  => 'Facebook');

done_testing();
